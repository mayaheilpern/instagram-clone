import React from "react";
import { PostCard } from "../components/Post/PostCard";

export const Posts = ({ currentUser }) => {
  return (
    <>
      <PostCard currentUser={currentUser} />
    </>
  );
};
