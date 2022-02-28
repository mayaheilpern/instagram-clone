import { useState } from "react";

export const CommentsModal = ({ comments, setModal, children }) => {
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
      {/* <div
        className="opacity-100 inset-0 absolute flex justify-center items-center overscroll-none"
        onClick={() => setModal(false)}
      ></div> */}
      <div className="bg-white fixed inset-x-0 bottom-0 rounded-t-2xl h-3/6 overflow-y-auto">
        <div className="flex flex-col justify-between">
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
          <form className="mx-2">
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
              <>
                <div key={comment.id} className="flex items-center mt-2">
                  <img
                    src={comment.user.avatar}
                    alt="user avatar"
                    className="w-5 h-5 ml-2"
                  />
                  <h2 className="px-3">{comment.user.username}</h2>
                </div>
                <p className="mx-2">{comment.content}</p>
              </>
            );
          })}
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
    </>
  );
};
