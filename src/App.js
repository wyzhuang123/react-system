import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import LayOut from './views/layout'
import Login from './views/Login'
import {Provider} from 'react-redux'
import store from '@/store/index.js'
function App() {
  let user = localStorage.getItem('user');
  if(user) {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <LayOut/>
          </div>
        </Provider>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Login/>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }

}

export default App;
