import React from 'react'
import { Layout, Breadcrumb, Tooltip, Avatar } from 'antd';
import FullScreen from '@/components/FullScreen'
import './index.less'
import {
  SettingOutlined
} from '@ant-design/icons';
import {connect} from 'react-redux'

const { Header } = Layout;
const Index = () => {
  return (
    <div> 
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div className="left-btns">
          <Breadcrumb style={{ margin: '16px 0', marginLeft: '15px', fontSize: '16px'}}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            {

            }
          </Breadcrumb>
        </div>
      <div className="right-btns">
        <FullScreen/>
        <Tooltip title="系统设置">
          <SettingOutlined />
        </Tooltip>
        {/* <Dropdown> */}
          <div>
            <Avatar 
              size={45} 
              src="https://img2.baidu.com/it/u=2287048747,916607753&fm=26&fmt=auto" 
              shape="circle"
            />
          </div>
        {/* </Dropdown> */}
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

)(Index)
