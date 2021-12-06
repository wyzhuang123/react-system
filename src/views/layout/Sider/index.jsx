import React, {useState, useEffect} from 'react'
import {Link,withRouter} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import MenuList from '@/config/MenuList.js'
import { createFromIconfontCN } from '@ant-design/icons';
import {connect} from 'react-redux';
import {createAddTagAction} from '@/store/actions/taglist.js';
import './index.less'

const { SubMenu } = Menu;
const { Sider } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2963763_3qye7lcqdl.js',
});
const user = JSON.parse(localStorage.getItem('user'));


const Index = (props) => {
  let [selectKey, setSelectKey] = useState([]);
  function addTag(title, path) {
    setSelectKey([path]);
    // 已经点击过的，不再添加到tagList
    let isAdd = true;
    props.tagList.forEach((obj) => {
      if(obj.title === title) {
        isAdd = false;
      }
    })
    if(isAdd) {
      props.ADD_TAG({title, path});      
    }
  }

  // 监控路由的跳转改变侧边栏选中状态
  let {pathname} = props.location;
  useEffect(() => {
    setSelectKey([pathname]);
  }, [pathname])

  return (
    <div style={{backgroundColor: '#001529'}}>
        <Sider collapsible  className="siber-box">
          <Menu theme="dark" defaultSelectedKeys={['首页']} mode="inline" selectedKeys={selectKey}>
            {
              MenuList.map((item) => {
                  if(item.children) {
                    // 实现通过判断用户类型来决定渲染侧边栏
                    if(Array.isArray(item.role) || item.role === Number.parseInt(user.type)) {
                      return  <SubMenu 
                                key={item.title} 
                                title={item.title} 
                                icon={<IconFont type={'icon-' + item.icon} 
                                style={{fontSize:'17px'}}/>}
                              >
                          { 
                            item.children.map((items) => {
                              return <Menu.Item key={items.path} >
                                        <Link 
                                        to={items.path} 
                                        onClick={() => addTag(items.title, items.path)}
                                        >
                                          <span>{items.title}</span>
                                        </Link>
                                    </Menu.Item> 
                            })
                          }  
                    </SubMenu>
                    }
                  } else {
                    if(Array.isArray(item.role) || item.role === Number.parseInt(user.type)) {
                          return <Menu.Item key={item.path}>
                          <Link 
                            to={item.path} 
                            onClick={() => addTag(item.title, item.path)}
                          >
                            {item.icon ? <IconFont type={'icon-' + item.icon} style={{fontSize:'17px'}}/> : null}
                            <span>{item.title}</span>
                          </Link>
                        </Menu.Item>
                    }

                  }
              })
            }
          </Menu>

        </Sider>
    </div>
  )
}

export default connect(
  state => {
    return {
        tagList: state.tagList
    }
  },
  {
    ADD_TAG: createAddTagAction
  }
)(withRouter(Index))
