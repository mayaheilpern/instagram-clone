import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createComment } from "../../services/api/commentsApiConfig";

export const CommentsModal = ({ comments, setModal, currentUser }) => {
  const count = comments.length;
  const navigate = useNavigate();

  const [input, setInput] = useState({ content: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(() => ({
      ...input,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser.id) {
      await createComment(comments[0].post_id, input);
      setInput({ content: "" });
    } else {
      navigate("/auth");
    }
  };

  return (
    <>
      <div
        className="opacity-100 inset-0 absolute flex justify-center items-center overscroll-none"
        onClick={() => setModal(false)}
      ></div>
      <div className="bg-white fixed inset-x-0 bottom-0 rounded-t-2xl h-3/6 overflow-y-auto md:fixed md:inset-y-0 md:inset-x-auto md:right-0 md:rounded-none md:h-auto md:w-[43vw] md:mt-20 md:border-l xl:w-[25vw]">
        <div className="flex justify-between">
          <div></div>
          <div className="text-center py-2">{count} comments</div>
          <button onClick={() => setModal(false)}>
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
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <Link
                  to={`/acct/${comment.user.username}`}
                  className="flex items-center mt-2"
                >
                  <img
                    src={comment.user.avatar}
                    alt="user avatar"
                    className="w-5 h-5 ml-2"
                  />
                  <h2 className="px-3">{comment.user.username}</h2>
                </Link>
                <p className="mx-2">{comment.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
