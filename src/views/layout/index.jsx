import React from 'react'
import Content from './Content'
import Header from './Header'
import Sider from './Sider'
import TagView from './TagView'
import { Layout } from 'antd';
export default function LayOut() {
   
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className="siber-box"/>
        <Layout className="site-layout">
          <Header/>
          <TagView/>
          <Content/>
        </Layout>
      </Layout>
    </div>
  )
}
