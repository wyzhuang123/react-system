import React, {useState} from 'react'
import { Table, Button, Collapse, Form, Input, Select, message,  } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import Excel from 'exceljs'
import './index.less'

const { Panel } = Collapse;
const { Option } = Select;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2963763_3qye7lcqdl.js',
});

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name'
  },
  {
    title: 'Age',
    dataIndex: 'Age',
    key: 'Age'
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address'
  },
];

const data = [];

for (let i = 0; i < 9; i++) {
  data.push({
    key: i,
    Name: `Edward King ${i}`,
    Age: 32,
    Address: `London, Park Lane no. ${i}`,
  });
}

export default function Index() {
  let [selectedRowKeys, setSelectedRowKeys] = useState([]);
  let [value, setValue] = useState('xlsx');
  let [FileName, setFileName] = useState('');


  let onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys);
  };

  let  handleChange = (e) => {
    setValue(e);
  }
  let onFileNameChange = (e) => {
    setFileName(e.target.value);
  }

  let fetchTableData = (type) => {
    const workbook = new Excel.Workbook();

    // 设置到处Excel的信息
    workbook.creator = "admin";
    workbook.lastModifiedBy = "admin";
    workbook.created = new Date();
    workbook.modified = new Date();

    let sheet = workbook.addWorksheet('sheet');

    let Tablecolumns = [];


    // 添加表头信息
    columns.map((item) => {
      Tablecolumns.push({
          header: item.title,
          key: item.key || item.dataIndex,
          width: parseInt(item.width / 6, 10) || 40
        })
      return true;
    })  
    sheet.columns = Tablecolumns;

    // 添加表数据
    if(Array.isArray(data)) {
      // 添加表格数据
      if(type === 'all') {
        sheet.addRows(data);
      } else {
        let someData = [];
        data.forEach((item) => {
          if(selectedRowKeys.includes(item.key)) {
            someData.push(item);
          }
        })
        sheet.addRows(someData);
        setSelectedRowKeys([]);
      }

      // 设置每一列样式 居中
      const row = sheet.getRow(1);
      row.eachCell((cell, rowNumber) => {
        sheet.getColumn(rowNumber).alignment = {
          vertical: "middle",
          horizontal: "center"
        };
      });

       // 将表格数据转为二进制, 选择输出文件格式
       if(FileName !== '') {
         if(value === 'xlsx') {
            workbook.xlsx.writeBuffer().then((buffer) => {
              writeFile(`${FileName}.xlsx`, buffer);
            });
         } else if(value === 'csv'){
           workbook.csv.writeBuffer().then((buffer) => {
              writeFile(`${FileName}.xlsx`, buffer);
           });
         }          
       } else {
        message.warning('文件名为空');
       }
    } else {
      message.error('数据有误！');
    }
  }
    // 将二进制转为Excel并下载
  let writeFile = (fileName, content) => {
    let a = document.createElement("a");
    let blob = new Blob([content], { type: "text/plain" });
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.click();
  };
  let rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <div>
      <Collapse defaultActiveKey={['1']} style={{marginBottom: '20px'}}>
        <Panel header="导出选项" key="1">
          <Form className="form-box">
            <Form.Item label="文件名" className="Input-box">
              <Input placeholder={"请输入文件名"} value={FileName} onChange={onFileNameChange}/>
            </Form.Item>
            <Form.Item label="文件类型" style={{marginLeft: '40px'}}> 
              <Select defaultValue={value} style={{ width: 120 }} onChange={handleChange}>
                <Option value="xlsx">xlsx</Option>
                <Option value="csv">csv</Option>
              </Select>
            </Form.Item>
            <Form.Item>
            <Button 
              type="primary" 
              icon={<IconFont type="icon-file-text-fill"/>} 
              size="20"
              style={{marginRight: '10px', marginLeft: '30px'}}
              onClick={() => {fetchTableData('all')}}
            >
              全部导出
            </Button>
            <Button 
              type="primary"  
              icon={<IconFont type="icon-file-text-fill"/>} 
              size="20" 
              onClick={() => {fetchTableData('some')}}
            >
              导出已选项
            </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
      <Table 
        rowSelection={rowSelection} 
        columns={columns} 
        dataSource={data} 
      />
    </div>
  )
}
