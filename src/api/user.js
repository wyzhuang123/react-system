import request from '@/utils/request.js'

export const userRegister = (data) => {
  return request({
    method: 'POST',
    url: '/userRegister',
    params: {
      data
    }
  })
}


export const userLogin = (data) => {
  return request({
    method: 'GET',
    url: '/userLogin',
    params: {
      data
    }
  })
}