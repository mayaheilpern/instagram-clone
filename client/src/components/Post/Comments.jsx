import { useState } from "react";
import userAvatar from "../../services/images/userAvatar.png";

export const Comments = ({ comments, setModal }) => {
  const count = comments.length;

  const [input, setinput] = useState({ content: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setinput(() => ({
      ...input,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className="opacity-100 inset-0 absolute flex justify-center items-center"
        onClick={() => setModal(false)}
      ></div>
      <div className="bg-white absolute inset-x-0 bottom-0 rounded-t-2xl h-3/6">
        <div className="flex flex-col justify-between">
          <ul>
            <div className="text-center py-2">{count} comments</div>
            <hr />
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <div className="flex">
                    <img
                      src={userAvatar}
                      alt="user avatar"
                      className="w-5 h-5"
                    />
                    <h2 className="px-3">{comment.user.username}</h2>
                  </div>
                  <p>{comment.content}</p>
                </li>
              );
            })}
          </ul>
          <form>
            <input
              type="text"
              name="content"
              value={input.value}
              onClick={handleInput}
              placeholder="Add Comment..."
              className="bg-red-500"
            />
          </form>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
};
