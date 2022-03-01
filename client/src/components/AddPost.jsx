import { useState } from "react";
import { createPost } from "../services/api/postsApiConfig";

export const AddPost = ({ setPostModal }) => {
  const defaultInput = {
    image_url: "",
    content: "",
  };

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
    await createPost(input);
    setPostModal(false);
  };

  return (
    <>
      <div
        className="opacity-50 inset-0 absolute flex justify-center items-center overscroll-none"
        onClick={() => setPostModal(false)}
      ></div>
      <div className="rounded-xl border-2 bg-white fixed inset-y-1/4 inset-x-8 h-2/4 overflow-y-auto">
        <div className="flex justify-between">
          <div></div>
          <div className="text-center py-2">Add Post</div>
          <button onClick={() => setPostModal(false)}>
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
        <form onSubmit={handleSubmit} className="m-3 flex flex-col">
          <input
            required
            autoFocus
            name="image_url"
            placeholder="Image"
            value={input.image_url}
            onChange={handleInput}
            className="
                border 
                rounded-md
                my-4 
                pl-2
                py-1
                focus:outline-none
                focus:border-teal-500 
                focus:ring-1 
                focus:ring-teal-500
              "
          />
          <textarea
            required
            name="content"
            placeholder="Content"
            value={input.content}
            onChange={handleInput}
            className="border rounded-md my-4 pl-2 py-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
          {input.image_url && (
            <img
              src={input.image_url}
              alt="image preview"
              className="w-full h-auto"
              onError={(e) =>
                (e.target.src =
                  "https://i.postimg.cc/y6trJYmC/Untitled-design.png")
              }
            />
          )}
          {input.content && (
            <div className="w-full h-auto break-all">{input.content}</div>
          )}
          <button className="block mx-auto bg-teal-500 rounded-lg px-5 py-1 mb-3 mt-2 text-white">
            Post
          </button>
        </form>
      </div>
    </>
  );
};
