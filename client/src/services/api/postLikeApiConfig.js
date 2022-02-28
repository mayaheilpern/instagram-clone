import { api } from "./apiConfig";

export const getPostLikes = async (postid) => {
  const res = await api.get(`posts/${postid}/likes`)
  return res.data
}

export const getLikesByUser = async (userid) => {
  const res = await api.get(`users/${userid}/likes`)
  return res.data
}

export const addlike = async (postid) => {
  const res = api.post(`posts/${postid}/likes`, {post_like: {content: ""}})
  return res.data
}

export const deleteLike = async (postid, likeid) => {
  const res = api.delete(`posts/${postid}/likes/${likeid}`)
  return res.data
}
