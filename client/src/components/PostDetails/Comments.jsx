import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createComment } from "../../services/api/commentsApiConfig";

export const Comments = ({ comments, postid, setToggle, currentUser }) => {
  const defaultInput = { content: "" };
  const navigate = useNavigate();

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
    if (currentUser.id) {
      await createComment(postid, input);
      setInput(defaultInput);
      setToggle((prevToggle) => !prevToggle);
    } else {
      navigate("/auth");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-2 flex justify-between">
        <input
          required
          name="content"
          placeholder="Add Comment..."
          value={input.content}
          onChange={handleInput}
          className="px-2 py-1 mb-3 mt-2 border-b focus:outline-none focus:border-teal-500"
        />
        <button className="bg-teal-500 rounded-lg px-5 py-1 mb-3 mt-2 text-white">
          Add
        </button>
      </form>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Link to={`/acct/${comment.user.username}`}>
              <div className="flex items-center p-2 mt-2">
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
