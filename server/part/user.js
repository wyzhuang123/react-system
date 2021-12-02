const db = require('../db');

let userList = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM USER', function(error, result) {
      if(error) {
        reject(error);
      }
      resolve(result);    
    })
  })
}

let userLogin = (Name, Password) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM USER WHERE (name, password) = ('${Name}', '${Password}')`, function(error, result) {
      if(error) {
        reject(error);
      }
      console.log(result);
      resolve(result);
    })
  })
}

let userRegister = (Name, Password, Email, Type, Token) => {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO user(name, password, email, type, token) VALUES('${Name}', '${Password}', '${Email}', '${Type}', '${Token}')`,function(error, result) {
      if(error) {
        reject(error);
      }
      console.log(result);
      resolve('注册成功');
    })
  })
}
exports.userList = userList;
exports.userLogin = userLogin;
exports.userRegister = userRegister;
