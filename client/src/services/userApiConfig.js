import axios from "axios";

const baseUrl = "http://localhost:3000/";

export const verifyUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const res = await api.get('auth/verify')
    return res.data
  } else {
    return false
  }
}

export const login = (data) => 
  axios({
    method: 'post',
    url: `${baseUrl}auth/login`,
    data: {authentication: data}
  })
  .then((res) => {
    localStorage.setItem('token', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
  })
  .catch((error) => {
    console.log(error)
  })

export const fetchAllUsers = () => 
  axios({
    url: `${baseUrl}users`,
  })
  .then((res) => {
    return res.data
  })
  .catch((error) => {
    console.log(error)
  })

export const signup = (data) => 
  axios({
    method: 'post',
    url: `${baseUrl}users`,
    data: {user: data}
  })
  .then((res) => {
    localStorage.setItem('token', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data
  })
  .catch((error) => {
    console.log(error)
  })

export const getOneUser = (userid) => 
  axios({
    url: `${baseUrl}users/${userid}`,
  })
  .then((res) => {
    return res.data
  })
  .catch((error) => {
    console.log(error)
  })

export const updateUser = (userid, data) => 
  axios({
    method: 'put',
    url: `${baseUrl}users/${userid}`,
    data: {user: data}
  })
  .then((res) => {
    return res.data
  })
  .catch((error) => {
    console.log(error)
  })

// export const deleteUser = (userid) => 
//   axios({
//     method: 'delete',
//     url: `${baseUrl}users/${userid}`,
//   })
//   .then((res) => {
//     return res.data
//   })
//   .catch((error) => {
//     console.log(error)
//   })


