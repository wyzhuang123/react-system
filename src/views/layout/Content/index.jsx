import React from 'react'
import { Layout } from 'antd';
import {Switch, Route, withRouter} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import routers from '@/router/index.js'
import './index.less'
import 'animate.css'
import 'nprogress/nprogress.css'
const { Content } = Layout;
 const index = (props) => {
  const {location} = props;
  return (
    <div>
          <Content style={{  backgroundColor:'#eef0f3' }}>
            <div  style={{ padding: 24, minHeight: 360, position: 'relative' }}>
              <TransitionGroup>
                <CSSTransition
                    key={location.pathname}
                    timeout={500}
                    classNames="fade"
                    exit={false}
                >
                  <Switch location={location} >
                    {
                      routers.map((route) => {
                        return (
                          <Route 
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                            key={route.path}
                            name={route.name}
                          />
                        )
                      })
                    }
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </Content>
    </div>
  )
}

export default withRouter(index);
