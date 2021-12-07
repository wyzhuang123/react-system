import React, {  } from 'react'
import './index.less'
import { Tag } from 'antd';
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createDeleteTagAction} from '@/store/actions/taglist.js'
const Index = (props) => {
  
  function onTagClose(title) {
    let { DELETE_TAG, tagList, history } = props;
    DELETE_TAG(title);
    console.log(props.tagList);
    history.replace(tagList[tagList.length - 1].path);
  }
  if(props.tagViewShow) {
    return (
      <div className="tag-box">
        <>
          {
            props.tagList.map((item) => {
              if(item.title === '首页') {
                return <Tag style={{marginRight: '10px', fontSize: '5px'}} key={item.path} color="processing">
                          <Link to={item.path}>{item.title}</Link>
                       </Tag>
              } else {
                return  <Tag closable onClose={() => {onTagClose(item.title)}} style={{marginRight: '10px', fontSize: '5px'}} key={item.path} color="processing">
                          <Link to={item.path}>{item.title}</Link>
                        </Tag>
              }
            })    
          }
  
        </>
      </div>
    )
  } else {
    return null;
  }
}

export default connect(
  state => {
    return {
        tagList: state.tagList,
        tagViewShow: state.app.settingTagView
    }
  },
  {
    DELETE_TAG: createDeleteTagAction
  }
)(withRouter(Index))
