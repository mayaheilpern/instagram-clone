import { api } from "./apiConfig";

export const getAllPosts = async () => {
  const res = await api.get("posts")
  return res.data
}

export const createPost = async (data) => {
  const res = await api.post("posts", { post: data })
  return res.data
}

export const getOnePost = async (postid) => {
  const res = await api.get(`posts/${postid}`)
  return res.data
}

export const updatePost = async (postid, data) => {
  const res = await api.put(`posts/${postid}`, { post: data })
  return res.data
}

export const deletePost = async (postid) => {
  const res = await api.delete(`posts/${postid}`)
  return res.data
}
