import React, {useEffect, useState} from 'react'
import Editor from 'for-editor'
import { Form, Input, Select, Button } from 'antd';
import axios from 'axios'
import './index.less'
export default function Index(props) {
  let id = props.match.params._id;
  let [article, setArticle] = useState({});
  let [type, setType] = useState(null);
  let [content, setContent] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:3001/getArticleContent/${id}`).then((result) => {
        let {data} = result;
        setArticle(data);
        setType(data.Type);
        setContent(data.Content);
    })
  },[]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Form className="form-box">
        <Form.Item label="Title" className="title-box">
          <Input placeholder="请输入5-20个字作为你文章的标题"  value={article.title}/>
        </Form.Item>
        <Form.Item label="Type" className="select-box">
            <Select value={type}>
              <Select.Option value="vue">Vue</Select.Option>
              <Select.Option value="vue">HTML</Select.Option>
              <Select.Option value="vue">CSS</Select.Option>
              <Select.Option value="vue">Js</Select.Option>
            </Select>
          </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round">
            修改
          </Button>
        </Form.Item>          
      </Form>

      <Editor 
        preview="true"
        subfield="true"
        value={content}
        // onChange={onChangeArticle}
      >
      </Editor>
    </div>
  )
}
