import { useState } from "react";
import { Link } from "react-router-dom";
import { createComment } from "../../services/api/commentsApiConfig";

export const Comments = ({ comments, postid, setToggle }) => {
  const defaultInput = { content: "" };

  const [input, setInput] = useState(defaultInput);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(() => ({
      ...input,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComment(postid, input);
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-2">
        <input
          name="content"
          placeholder="Add Comment..."
          value={input.content}
          onChange={handleInput}
          className="p-1 border-2 rounded-md focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
        />
        <button className="bg-teal-500 rounded-lg px-5 py-1 mb-3 mt-2 text-white">
          Add
        </button>
      </form>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Link to={`/acct/${comment.user.id}`}>
              <div className="flex items-center p-2 mt-2">
                <img
                  src={comment.user.avatar}
                  alt="user avatar"
                  className="w-6 h-6"
                />
                <p className="px-3">{comment.user.username}</p>
              </div>
            </Link>
            <p className="px-2">{comment.content}</p>
          </div>
        );
      })}
    </>
  );
};
