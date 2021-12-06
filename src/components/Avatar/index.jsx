import React from 'react';
import { Menu, Dropdown, Avatar, Button } from 'antd';
import { withRouter } from 'react-router-dom'
import './index.less'
const Themenu = (props) => {
  return (
    <Menu style={{width: '100px'}}>
      <Menu.Item key='1'>
        <a onClick={() => {props.history.replace('/')}}>
        首页
        </a>
      </Menu.Item>
      <Menu.Item key='2'>
        <a onClick={() => {window.open('https://github.com/wyzhuang123/react-system')}}>
        项目地址
        </a>
      </Menu.Item>
      <Menu.Item key='3'>
        <a onClick={
          () => {
            localStorage.removeItem('user'); 
            props.history.go(0);
          }
        }>
        注销
        </a>
      </Menu.Item>
    </Menu>
  )
};
const Index = (props) => {
  return (
    <div>
      <Dropdown overlay={<Themenu {...props}/>} placement="bottomCenter" arrow>
        <Avatar 
          size={45} 
          src="https://img2.baidu.com/it/u=2287048747,916607753&fm=26&fmt=auto" 
          shape="circle"
        />
      </Dropdown>
    </div>
  );
}

export default withRouter(Index);
