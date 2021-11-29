import React, {useEffect} from 'react'
import { Spin } from 'antd';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default function Index() {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    }
  }, [])
  return (
    <div>
      <Spin/>
    </div>
  )
}
