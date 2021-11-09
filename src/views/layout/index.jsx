import React, {useState} from 'react'
import Content from './Content'
import Header from './Header'
import Sider from './Sider'
import Footer from './Footer'
import { Layout } from 'antd';
export default function LayOut() {

  let [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider/>
        <Layout className="site-layout">
          <Header/>
          <Content/>
          <Footer/>          
        </Layout>
      </Layout>
    </div>
  )
}
