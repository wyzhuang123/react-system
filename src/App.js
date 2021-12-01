import 'antd/dist/antd.css'
import LayOut from './views/layout'
import Login from './views/Login'
function App() {
  let user = localStorage.getItem('user');
  if(user) {
   return  <LayOut/>
  } else {
   return  <Login/>
  }
}

export default App;
