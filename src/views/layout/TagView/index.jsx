import React from 'react'
import './index.less'
import { Tag } from 'antd';
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createAddTagAction} from '@/store/actions/taglist.js'
const index = (props) => {
  function onTagClose(title) {
      // props.DELETE_TAG(title);
      // console.log(props.tagList);
      // console.log(props.tagList);
      // let obj = props.tagList[props.tagList.length - 1];
      // let path = obj.path;
      // props.history.replace(path);
  }
  return (
    <div className="tag-box">
      <>
        {
          props.tagList.map((item) => {
            if(item.title === '首页') {
              return <Tag style={{marginRight: '10px', fontSize: '5px'}} key={item.title} color="processing">
                        <Link to={item.path}>{item.title}</Link>
                     </Tag>
            } else {
              return  <Tag closable onClose={() => onTagClose(item.title)} style={{marginRight: '10px', fontSize: '5px'}} key={item.title} color="processing">
                        <Link to={item.path}>{item.title}</Link>
                      </Tag>
            }

          })    
        }

      </>
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
    DELETE_TAG: createAddTagAction
  }
)(withRouter(index))
