import React, { useEffect, useState } from 'react'
import { Layout, Breadcrumb, Tooltip, Avatar } from 'antd';
import FullScreen from '@/components/FullScreen'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { SettingOutlined } from '@ant-design/icons';
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
        <Tooltip title="系统设置">
          <SettingOutlined />
        </Tooltip>
          <div>
            <Avatar 
              size={45} 
              src="https://img2.baidu.com/it/u=2287048747,916607753&fm=26&fmt=auto" 
              shape="circle"
            />
          </div>
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
