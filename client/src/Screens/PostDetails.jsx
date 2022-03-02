import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Comments } from "../components/PostDetails/Comments";
import { getOnePost } from "../services/api/postsApiConfig";
import { getAllComments } from "../services/api/commentsApiConfig";
import {
  addlike,
  deleteLike,
  getPostLikes,
} from "../services/api/postLikeApiConfig";

export const PostDetails = ({ currentUser }) => {
  const [post, setPost] = useState({});
  const [postLikes, setPostlikes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [comments, setComments] = useState([]);
  const [toggleComments, setToggleComments] = useState(false);
  const { postid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const posts = await getOnePost(postid);
      setPost(posts);
      const likes = await getPostLikes(postid);
      setPostlikes(likes);
    };
    getPost();
  }, [toggle, postid]);

  const isLiked = postLikes.filter(({ user_id }) => user_id === currentUser.id);
  const liked = isLiked[0] && "fill-red-500 stroke-red-500";

  const handleLike = async (e) => {
    e.preventDefault();
    if (currentUser.id) {
      if (isLiked.length === 0) {
        await addlike(postid);
        setToggle((prevToggle) => !prevToggle);
      } else {
        await deleteLike(postid, isLiked[0].id);
        setToggle((prevToggle) => !prevToggle);
      }
    } else {
      navigate("/auth");
    }
  };

  const openComments = async () => {
    const res = await getAllComments(postid);
    setComments(res);
    setToggleComments((prevToggle) => !prevToggle);
  };

  return (
    <div className="rounded-xl shadow-xl border-2 mx-[10vw] my-[5vh]">
      <Link to={`/acct/${post.user?.username}`}>
        <div className="flex items-center p-3">
          {post.user?.avatar === null ? (
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTBJlhH4ljFf4zwPw6qDY1vOBTVnkEdg3jMw44-OhLq2AazLtw"
              alt="user profile img"
              className="w-14"
            />
          ) : (
            <img
              src={post.user?.avatar}
              alt="user profile img"
              className="w-14"
              onError={(e) =>
                (e.target.src =
                  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTBJlhH4ljFf4zwPw6qDY1vOBTVnkEdg3jMw44-OhLq2AazLtw")
              }
            />
          )}
          <h1 className="px-4 text-xl">{post.user?.username}</h1>
        </div>
      </Link>
      <hr />
      <img src={post.image_url} alt="post img" className="w-full h-auto" />
      <div className="flex flex-col">
        <p className="p-3">{post.content}</p>
        <div className="p-3 flex flex-row">
          <button onClick={handleLike} className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${liked}`}
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
            <p className="pl-2">{postLikes.length} Likes</p>
          </button>
          <button onClick={openComments} className="flex flex-row px-5">
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
            <p className="pl-2">{post.comments?.length} Comments</p>
          </button>
        </div>
      </div>
      {toggleComments && (
        <Comments
          comments={comments}
          postid={postid}
          setToggle={setToggle}
          currentUser={currentUser}
        />
      )}
    </div>
  );
};
