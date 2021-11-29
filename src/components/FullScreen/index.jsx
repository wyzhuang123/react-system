import React from 'react'
import { Tooltip } from 'antd';
import {
  FullscreenOutlined
} from '@ant-design/icons';
export default function index() {
  // let fullscreen = us


  return (
    <div>
        <Tooltip title="全屏">
          <FullscreenOutlined />
        </Tooltip>
    </div>
  )
}
