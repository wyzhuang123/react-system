import React, {useRef, useState} from 'react'
import { Form, Input, Button } from 'antd';
import {withRouter} from 'react-router-dom'
import {userRegister, userLogin} from '@/api/user.js'
import './index.less'

const Index = (props) => {
  let username = useRef(null);
  let password = useRef(null);
  let email = useRef(null);
  let [isLogin, setIsLogin] = useState(true);


  async function LoginClick() {
      let user = {
        username: username.current.props.value,
        password: password.current.props.value, 
      }
      let {data} = await userLogin(JSON.stringify(user));
      // console.log(data);
      let User = {
        name: data.name,
        type: data.type,
        token: data.token
      }
      if(data) {
        localStorage.setItem('user', JSON.stringify(User));
        props.history.go(0);
      }
  }


  async function RegisterClick() {
    let user = {
      username: username.current.props.value,
      password: password.current.props.value,
      email: email.current.state.value
    }
    let {data} = await userRegister(JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(data));
    props.history.go(0);
  }

  const Register = (props) => {
    let {isLogin} = props;
    if(!isLogin) {
        return (
          <div>
            <Form.Item label="再次输入">
              <Input.Password />
            </Form.Item>
            <Form.Item label="邮箱">
              <Input ref={email}/>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary" 
                htmlType="submit" 
                style={{marginLeft: '47%'}}
                onClick={RegisterClick}              
              >提交</Button>
            </Form.Item>
            <Form.Item>
            <Button 
              type="primary" 
               htmlType="submit" 
               style={{marginLeft: '47%'}}
               onClick={() => {setIsLogin(true)}}
            >
              登录
            </Button>
            </Form.Item>
          </div>
        )
    } else {
        return (
          <div>
            <Form.Item>
              <Button
                type="primary" 
                htmlType="submit" 
                style={{marginLeft: '47%'}}
                onClick={LoginClick}              
              >提交</Button>
            </Form.Item>
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                style={{marginLeft: '47%', marginTop: '10px'}}
                onClick={() => {setIsLogin(!isLogin)}}
              >
                注册
              </Button>
            </Form.Item>
          </div>

        )
    }
  }
    return (
      <div className="container">
          <div className="login-box">
              <h2>登录</h2>
              <Form
                    name="basic"
                  >
                    <Form.Item
                      label="帐号"
                      name="username"
                      rules={[
                        {
                        },
                      ]}
                    >
                      <Input  ref={username}/>
                    </Form.Item>
                    <Form.Item
                      label="密码"
                      name="password"
                      rules={[
                        {
                        },
                      ]}
                    >
                      <Input.Password ref={password}/>
                    </Form.Item>
                    <Register isLogin={isLogin}/>
               </Form>
          </div>
      </div>
    )
}
export default withRouter(Index);