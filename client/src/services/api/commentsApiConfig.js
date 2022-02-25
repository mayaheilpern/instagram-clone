import { api } from "./apiConfig";

export const getAllComments = async (postid) => {
  const res = api.get(`posts/${postid}/comments`)
  return res.data
}

export const createComment = async (postid, data) => {
  const res = api.post(`posts/${postid}/comments`, {comment: data})
  return res.data
}

export const deleteComment = async (postid) => {
  const res = api.delete(`posts/${postid}/comments`)
  return res.data
}
