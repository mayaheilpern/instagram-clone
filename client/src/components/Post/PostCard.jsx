import { useState, useEffect } from "react";
import { allComments } from "../../services/api/commentsApiConfig";
import { getAllPosts } from "../../services/api/postsApiConfig";
import userAvatar from "../../services/images/userAvatar.png";
import { Comments } from "./Comments";
import { addlike, deleteLike } from "../../services/api/postLikeApiConfig";

export const PostCard = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [modal, setModal] = useState(false);
  // const [like, setLike] = useState(false);
  // const [liked, setLiked] = useState({});
  const [toggle, setToggle] = useState(false);
  // const [toggleLike, setToggleLike] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const post = await getAllPosts();
      setPosts(post);
    };
    getPosts();
  }, [toggle]);

  // console.log(like);
  // console.log(posts[0].post_likes);

  // useEffect(() => {
  //   const handleLike = async () => {
  //     const res = await addlike(1);
  //     console.log(res);
  //     setLiked(res);
  //     console.log(liked);
  //   };
  //   handleLike();
  // }, [toggleLike]);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {posts.map((post) => {
        return (
          <div key={post.id} className="border-2 rounded-lg m-8">
            <div className="flex items-center">
              <img src={userAvatar} alt="user avatar" className="w-9" />
              <h1 className="px-4 text-xl">{post.user.username}</h1>
            </div>
            <hr />
            <img src={post.image_url} alt="post img" />
            <hr />
            <div className="flex justify-between">
              <p>{post.content}</p>
              <div>
                <button
                // onClick={async () => {
                //   // const a = async () => {
                //   if (like === false) {
                //     const res = addlike(post.id);
                //     // setLiked(res);
                //     // console.log(liked);
                //     console.log(res);
                //   }
                // };
                // a();
                // }}
                // onClick={() => setToggleLike(!toggleLike)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <p>{post.post_likes.length}</p>
                <button
                  onClick={async () => {
                    const res = await allComments(post.id);
                    const c = res.filter(({ post_id }) => post_id === post.id);
                    setComments(c);
                    setModal(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {modal && <Comments setModal={setModal} comments={comments} />}
    </>
  );
};
