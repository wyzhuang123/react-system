import React, { useEffect, useRef } from 'react';
import './index.less'
import { createFromIconfontCN } from '@ant-design/icons';
import Typing from '@/utils/typing.js'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2963763_k5kb6uo4t1e.js'
})

const Index = (props) => {
  let source = useRef(null);
  let target = useRef(null);
  useEffect(() => {
    Typing(source.current, target.current, 50);
  }, [])
  return (
    <div>
      <div className="photo">
        <IconFont type={'icon-' + props.data.icon} style={{            
          color: 'green', 
          fontSize:'65px',
          margin: '5px 5px'}}
        />
      </div>
      <div className="number">
        <span style={{fontSize: '20px', color: 'gray'}}>{props.data.name}</span>
        <span style={{fontSize: '25px', textAlign: 'center', display: 'none'}} ref={source}>{props.data.number}</span>
        <span style={{fontSize: '25px', textAlign: 'center'}} ref={target}></span>
      </div>
    </div>
  );
}

export default Index;
