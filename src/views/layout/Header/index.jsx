import React, { useEffect, useState } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FullScreen from '@/components/FullScreen'
import Settings from '@/components/Settings'
import Avatar from '@/components/Avatar'
import './index.less'
const { Header } = Layout;
const Index = (props) => {

  // 设置页头信息
  let {pathname} = props.location;
  let {tagList} = props;
  let [currentTitle, setCurrentTitle] = useState('');
  useEffect(() => {
    tagList.forEach((item) => {
        if(item.path === pathname) {
          if(item.title === '首页') {
            setCurrentTitle('');
          } else {
            setCurrentTitle(item.title);
          }
        }
    })
  }, [pathname])


  return (
    <div> 
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div className="left-btns">
          <Breadcrumb style={{ margin: '16px 0', marginLeft: '15px', fontSize: '16px'}}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>{currentTitle}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      <div className="right-btns">
        <FullScreen/>
        <Settings/>
        <Avatar/>
      </div>
      </Header>
      <div style={{
        backgroundColor: '#fff',
      }}>
      </div>
    </div>
  )
}


export default connect(
  state => {
    return {
      tagList: state.tagList
    }
  }
)(withRouter(Index))
