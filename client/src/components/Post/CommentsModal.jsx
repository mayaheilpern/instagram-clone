import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createComment } from "../../services/api/commentsApiConfig";
import {
  getAllCommentLikes,
  addCommentLike,
  deleteCommentLike,
} from "../../services/api/commentLikeApiConfig";

export const CommentsModal = (props) => {
  const count = props.comments.length;
  const navigate = useNavigate();

  const [input, setInput] = useState({ content: "" });
  const [commentLikes, setCommentLikes] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getLikes = async () => {
      const res = await getAllCommentLikes();
      setCommentLikes(res);
      setToggle(false);
    };
    getLikes();
  }, [toggle]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(() => ({
      ...input,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.currentUser.id) {
      await createComment(props.comments[0].post_id, input);
      setInput({ content: "" });
    } else {
      navigate("/auth");
    }
  };

  return (
    <>
      <div
        className="opacity-100 inset-0 absolute flex justify-center items-center overscroll-none"
        onClick={() => props.setModal(false)}
      ></div>
      <div className="bg-white fixed inset-x-0 bottom-0 rounded-t-2xl h-3/6 overflow-y-auto md:fixed md:inset-y-0 md:inset-x-auto md:right-0 md:rounded-none md:h-auto md:w-[43vw] md:mt-20 md:border-l xl:w-[25vw]">
        <div className="flex justify-between">
          <div></div>
          <div className="text-center py-2">{count} comments</div>
          <button onClick={() => props.setModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-2 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr />
        <form onSubmit={handleSubmit} className="mx-2 flex justify-between">
          <input
            required
            name="content"
            placeholder="Add Comment..."
            value={input.content}
            onChange={handleInput}
            className="px-2 py-1 mb-3 mt-2 mr-1 border-b w-full focus:outline-none focus:border-teal-500"
          />
          <button className="bg-teal-500 rounded-lg px-5 py-1 mb-3 mt-2 text-white">
            Add
          </button>
        </form>
        <div className="flex flex-col justify-between">
          {props.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <Link
                  to={`/acct/${comment.user.id}`}
                  className="flex items-center mt-2"
                >
                  {comment.user.avatar === null ? (
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTBJlhH4ljFf4zwPw6qDY1vOBTVnkEdg3jMw44-OhLq2AazLtw"
                      alt="user profile img"
                      className="w-14"
                    />
                  ) : (
                    <img
                      src={comment.user.avatar}
                      alt="user profile img"
                      className="w-14"
                      onError={(e) =>
                        (e.target.src =
                          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTBJlhH4ljFf4zwPw6qDY1vOBTVnkEdg3jMw44-OhLq2AazLtw")
                      }
                    />
                  )}
                  <h2 className="px-3">{comment.user.username}</h2>
                </Link>
                <p className="mx-2">
                  {comment.content}
                  {comment.id}
                </p>
                <button
                  onClick={() => {
                    if (props.currentUser.id) {
                      const isLiked = commentLikes.filter(
                        ({ user_id, comment_id }) =>
                          user_id === props.currentUser.id &&
                          comment_id === comment.id
                      );
                      const like = async () => {
                        if (isLiked.length === 0) {
                          const res = await addCommentLike(comment.id);
                          console.log(res);
                          console.log(`added to ${comment.id}`);
                          setToggle(true);
                        } else {
                          await deleteCommentLike(comment.id, isLiked[0].id);
                          console.log(`deleted from ${comment.id}`);
                          setToggle(true);
                        }
                      };
                      like();
                    } else {
                      navigate("/auth");
                    }
                  }}
                  className="flex flex-row"
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
                  <p className="pl-2">
                    {
                      commentLikes.filter(
                        ({ comment_id }) => comment_id === comment.id
                      ).length
                    }
                    &nbsp;Likes
                  </p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
