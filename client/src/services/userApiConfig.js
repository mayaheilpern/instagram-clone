import { api } from "./apiConfig";

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

export const loginUser = async (data) => {
  const res = await api.post('auth/login', {authentication: data})
  localStorage.setItem('token', res.data.token)
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
  return res.data.user
}

export const getAllUsers = async () => {
  const res = await api.get('users')
  return res.data
}

export const signupUser = async (data) => {
  const res = await api.post('users', {user: data})
  localStorage.setItem('token', res.data.token)
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
  return res.data
}

export const getOneUser = async (userId) => {
  const res = await api.get(`users/${userId}`)
  return res.data
}

export const updateUser = async (userId, data) => {
  const res = await api.put(`users/${userId}`, {user: data})
  return res.data
}

// export const deleteUser = async (userId) => {
//   const res = await api.delete(`user/${userId}`)
//   return res.data
// }

