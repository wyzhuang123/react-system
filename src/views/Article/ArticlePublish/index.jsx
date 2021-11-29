import React from 'react'
import Editor from 'for-editor'
import { Form, Input, Select } from 'antd';
import './index.less'
export default function index() {
  return (
    <div>
      <Form className="form-box">
        <Form.Item label="Title" className="title-box">
          <Input placeholder="请输入5-20个字作为你文章的标题" />
        </Form.Item>
        <Form.Item label="Type" className="select-box">
            <Select>
              <Select.Option value="vue">Vue</Select.Option>
            </Select>
          </Form.Item>        
      </Form>

      <Editor 
        subfield="true" 
      >
      </Editor>
    </div>
  )
}
