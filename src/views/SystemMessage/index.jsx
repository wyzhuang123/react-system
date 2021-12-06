import React, {useRef, useEffect} from 'react'
import Typing from '@/utils/typing.js'
export default function Index() {
  let p = useRef(null);
  let target = useRef(null);
  useEffect(() => {
    Typing(p.current, target.current);
  }, [])
  return (
    <div>
      <div>
        <p ref={p} style={{display: 'none'}}>系统为自己React的练手项目，尽量做到涵盖react的大部分知识点</p>
        <p ref={target}></p>
      </div>
    </div>
  )
}
