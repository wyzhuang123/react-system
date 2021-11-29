import React, {useRef} from 'react'
import { Form, Input, Button } from 'antd';
import {withRouter} from 'react-router-dom'
import './index.less'
const Index = (props) => {
  let username = useRef(null);
  let password = useRef(null);

  function LoginClick() {
      let user = {
        username: username.current.value,
        password: username.current.value
      }
      localStorage.setItem('user', JSON.stringify(user));
      props.history.go(0);
  }
  return (
    <div className="container">
        <div className="login-box">
            <h2>登录</h2>
            <Form
                  name="basic"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                      },
                    ]}
                  >
                    <Input  ref={username}/>
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                      },
                    ]}
                  >
                    <Input.Password ref={password}/>
                  </Form.Item>
                  <Form.Item
                  >
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      style={{marginLeft: '47%'}}
                      onClick={LoginClick}
                    >
                      登录
                    </Button>
                  </Form.Item>
             </Form>
        </div>
    </div>
  )
}
export default withRouter(Index);