const express = require('express');

const router = express.Router();

// 用户业务
const user = require('./part/user.js');

const jwt = require('jsonwebtoken');

router.get('/allUser', async function(req, res) {
    try {
      let list = await user.userList();
      res.send(list);      
    } catch (error) {
      res.send(error);
    }
})

router.get('/userLogin', function(req, res) {
  try {
    let {data} = req.query;
    let User = JSON.parse(data);   
    console.log(User);
    user.userLogin(User.username, User.password).then((result) => {
      console.log(result);
      res.send(result[0]);
    })
  } catch (error) {
    res.send(error);
  }
})

router.post('/userRegister', function(req, res) {
  try {
    let {data} = req.query;
    let User = JSON.parse(data);
    let secretOrPrivateKey = "kk000125";
    let token = jwt.sign({name: User.username, password: User.password}, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 24 * 7    //一周过期
    });
    user.userRegister(User.username, User.password, User.email, 1, token).then((result) => {
      if(result) {
        res.send(result);
      } 
    });     
  } catch (error) {
    res.send(error);
  }
})



module.exports = router;