import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allComments } from "../../services/api/commentsApiConfig";
import { getAllPosts } from "../../services/api/postsApiConfig";
import { CommentsModal } from "./CommentsModal";
import {
  addlike,
  deleteLike,
  getAllLikes,
} from "../../services/api/postLikeApiConfig";

export const PostCard = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [postLikes, setPostlikes] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const post = await getAllPosts();
      setPosts(post);
      const likes = await getAllLikes();
      setPostlikes(likes);
      setToggle(false);
    };
    getPosts();
  }, [toggle]);

  const layout = modal
    ? "flex justify-start items-start flex-col"
    : "flex justify-center items-center flex-col";

  return (
    <div className={layout}>
      {posts.map((post) => {
        return (
          <div key={post.id} className="border-2 rounded-lg m-10 md:w-96">
            <Link
              to={`/acct/${post.user.id}`}
              className="flex items-center p-2"
            >
              <img src={post.user.avatar} alt="user avatar" className="w-9" />
              <h1 className="px-4 text-xl">{post.user.username}</h1>
            </Link>
            <hr />
            <Link to={`/${post.id}`}>
              <img src={post.image_url} alt="post" />
            </Link>
            <hr />
            <p className="p-2">{post.content}</p>
            <div className="p-3 flex flex-row">
              <button
                onClick={() => {
                  const isLiked = postLikes.filter(
                    ({ user_id, post_id }) =>
                      user_id === currentUser.id && post_id === post.id
                  );
                  const like = async () => {
                    if (isLiked.length === 0) {
                      await addlike(post.id);
                      setToggle(true);
                    } else {
                      await deleteLike(post.id, isLiked[0].id);
                      setToggle(true);
                    }
                  };
                  like();
                }}
                className="flex flex-row"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6`}
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
                <p className="pl-2">{post.post_likes.length} Likes</p>
              </button>
              <button
                onClick={async () => {
                  const res = await allComments(post.id);
                  const c = res.filter(({ post_id }) => post_id === post.id);
                  setComments(c);
                  setModal(true);
                }}
                className="flex flex-row px-5"
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
                <p className="pl-2">Comments</p>
              </button>
            </div>
          </div>
        );
      })}
      {modal && <CommentsModal setModal={setModal} comments={comments} />}
    </div>
  );
};
