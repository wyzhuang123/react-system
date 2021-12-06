import React, { useState } from 'react';
import { Tooltip, Drawer, Switch } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import { createAppAction } from '@/store/actions/app.js'
import './index.less'
const Index = (props) => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  function onSwitchChange() {
    props.TAGVIEW_SHOW();
    console.log(props.tagViewShow);
  }
  return (
    <div>
      <>
      <Tooltip title="系统设置">
        <SettingOutlined onClick={() => {setVisible(true)}}/>
      </Tooltip>
      <Drawer title="系统设置" placement="right" onClose={onClose} visible={visible} width="250">
        <div className="switch-box">
          <p>是否开启标签栏</p>
          <Switch defaultChecked={true}  onChange={onSwitchChange}/>
        </div>
      </Drawer> 
      </>
    </div>
  );
}

export default connect(
  state => {
    return {
      tagViewShow: state.app.settingTagView
    }
  }, 
  {
    TAGVIEW_SHOW: createAppAction
  }
)(Index);
