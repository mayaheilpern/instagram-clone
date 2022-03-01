import { api } from "./apiConfig";

export const getAllCommentLikes = async () => {
  const res = await api.get(`comment_likes`)
  return res.data
}

export const getCommentLikes = async (commentid) => {
  const res = await api.get(`comments/${commentid}/comment_likes`)
  return res.data
}

export const getCommentLikesByUser = async (userid) => {
  const res = await api.get(`users/${userid}/comment_likes`)
  return res.data
}

export const addCommentLike = async (commentid) => {
  const res = api.post(`comments/${commentid}/comment_likes`, {comment_like: {content: ""}})
  return res.data
}

export const deleteCommentLike = async (commentid, likeid) => {
  const res = api.delete(`comments/${commentid}/comment_likes/${likeid}`)
  return res.data
}
