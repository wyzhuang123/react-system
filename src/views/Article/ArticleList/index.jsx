import React, { useState, useLayoutEffect } from 'react'
import { Table, Tag, Space, Drawer, Button } from 'antd';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import './index.less'
import Editor from 'for-editor'
const  Index = (props) => {
  let [articles, setArticles] = useState([]);
  let [currentArticle, setCurrentArticle] = useState({});
  const [visible, setVisible] = useState(false);
  
  const onClose = () => {
    setVisible(false);
  };
  const seeArticle = (article) => {
    setCurrentArticle(article);
    console.log(currentArticle);
    // setCurrentArticle(article)
    setVisible(true);
  }
  useLayoutEffect(() => {
      axios.get('http://localhost:3001/ALLArticles').then((result) => {
          let {data} = result;
          data.forEach(((item) => {
              item.key = item._id;
          }))
          setArticles(data);
      })
  }, [])
  const columns = [
    {
      title: 'id',
      dataIndex: '_id',
      key: '_id',
      render: text => <Button>{text}</Button>,
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Type',
      key: 'Type',
      dataIndex: 'Type',
      render: (type) => (
        <>
              <Tag color="skyblue" key={type}>
                {type}
              </Tag>
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (article) => (
        <Space size="middle">
          <Button onClick={() => {seeArticle(article)}}>详情</Button>
          <Button onClick={() => {props.history.replace(`/articleEdit/${article._id}`)}}>修改</Button>
          <Button>删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={articles} />
      <Drawer title="文章" placement="right" visible={visible} onClose={onClose}>
          <Editor 
            preview="true"
            toolbar={{}}
            value={currentArticle.Content}
          />
      </Drawer>
    </div>
  )
}
export default withRouter(Index);