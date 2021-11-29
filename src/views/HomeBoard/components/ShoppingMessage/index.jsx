import React from 'react'
import './index.less'
import {
  UserOutlined,
  MessageOutlined,
  PayCircleOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
export default function index() {
  return (
    <div>
      <div className="shopping-main-box">
        <div>
          <div className="photo">
          <UserOutlined style={{
            color: 'green', 
            fontSize:'65px',
            margin: '5px 5px'
            }}/>
          </div>
          <div className="number">
              <span style={{fontSize: '20px', color: 'gray'}}>New Visits</span>
              <span style={{fontSize: '25px', textAlign: 'center'}}>1024</span>
          </div>
        </div>
        <div>
          <div className="photo">
          <MessageOutlined  style={{
            color: 'skyblue', 
            fontSize:'65px',
            margin: '5px 5px'
            }}/>
          </div>
          <div className="number">
              <span style={{fontSize: '20px', color: 'gray'}}>Messages</span>
              <span style={{fontSize: '25px', textAlign: 'center'}}>8181</span>
          </div>
        </div>
        <div>
          <div className="photo">
          <PayCircleOutlined  style={{
            color: 'red', 
            fontSize:'65px',
            margin: '5px 5px'
            }}/>
          </div>
          <div className="number">
              <span style={{fontSize: '20px', color: 'gray'}}>Purchases</span>
              <span style={{fontSize: '25px', textAlign: 'center'}}>9280</span>
          </div>
        </div>
        <div>
          <div className="photo">
          <ShoppingCartOutlined style={{
            color: 'rosybrown', 
            fontSize:'65px',
            margin: '5px 5px'
            }}/>
          </div>
          <div className="number">
              <span style={{fontSize: '20px', color: 'gray'}}>Shoppings</span>
              <span style={{fontSize: '25px', textAlign: 'center'}}>13666</span>
          </div>
        </div>
      </div>
    </div>
  )
}
