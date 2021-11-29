import React from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import MenuList from '@/config/MenuList.js'
import { createFromIconfontCN } from '@ant-design/icons';
import './index.less'
import {connect} from 'react-redux'
import {createAddTagAction} from '@/store/actions/taglist.js'
const { SubMenu } = Menu;
const { Sider } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2963763_3qye7lcqdl.js',
});
const index = (props) => {
  function addTag(title, path) {
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
  return (
    <div style={{backgroundColor: '#001529'}}>
        <Sider collapsible  className="siber-box">
          <Menu theme="dark" defaultSelectedKeys={['首页']} mode="inline">
            {
              MenuList.map((item) => {
                  if(item.children) {
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
                  } else {
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
)(index)
