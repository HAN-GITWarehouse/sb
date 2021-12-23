import request from './request'

export const LoginUser = params => {
  return request('login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      username: params.username,
      password: params.password,
      ...params
    }
  })
}
