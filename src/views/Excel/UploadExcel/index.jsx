import React from 'react'
import { Upload, message, Table, Tag } from 'antd';
import Excel from 'exceljs'
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: false,
  async onChange(info) {
    const workbook = new Excel.Workbook();
    const result = await workbook.xlsx.readFile(info.file);
    const { status } = info.file; 
    console.log(info.file.response);
    console.log(result);
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

export default function index() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag   color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    }
  ];
  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];

  // async function readExcelFile() {
    
  //   // let result = await workbook.xlsx.readFile(filename);
  //   // console.log(result);
  // }
  return (
    <div>
      <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">??????????????????????????????Excel??????</p>
      </Dragger>
      <Table bordered  columns={columns}  />   
    </div>
  )
}
