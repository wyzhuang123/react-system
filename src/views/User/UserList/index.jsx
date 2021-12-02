import React, {useEffect,useState} from 'react';
import { Table, Space } from 'antd';
import {allUser} from '@/api/user.js'
// 表头信息
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Type',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
      </Space>
    ),
  },
];


const Index = () => {

  // 获取数据
  let [tableData,setTableData] = useState([]);
  async function initTableData() {
      let {data} = await allUser();
      data.forEach((item) => {
          item.key = item.name;
      })
      setTableData(data);
  }
  useEffect(() => {
    initTableData();
  }, [])


  return (
    <div>
      <Table columns={columns} dataSource={tableData} />
    </div>
  );
}

export default Index;
