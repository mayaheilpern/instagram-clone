import axios from "axios";
import { api } from "./apiConfig";

const baseUrl = "http://localhost:3000/"

export const allComments = () => 
  axios({
    url: baseUrl
  })
  .then(res => {
    return res.data
  })
  .catch(error => {
    console.log(error)
  })
  
export const getAllComments = (postid) => 
  axios({
    url: `${baseUrl}posts/${postid}/comments`
  })
  .then(res => {
    return res.data
  })
  .catch(error => {
    console.log(error)
  })

export const createComment = async (postid, data) => {
  const res = api.post(`posts/${postid}/comments`, {comment: data})
  return res.data
}

export const deleteComment = async (postid) => {
  const res = api.delete(`posts/${postid}/comments`)
  return res.data
}
