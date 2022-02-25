import React from "react";

export const Posts = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <img
              src={post.image_url}
              alt={`posts number ${post.id}`}
              className="w-20 h-20 m-1"
            />
          </div>
        );
      })}
    </div>
  );
};
