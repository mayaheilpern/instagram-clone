import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/api/postsApiConfig";

export const AddPost = () => {
  const defaultInput = {
    image_url: "",
    content: "",
  };

  const [input, setInput] = useState(defaultInput);
  const navigate = useNavigate();

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
    navigate("/posts");
  };

  return (
    <div className="rounded-xl shadow-xl border-2 mx-[12.5vw] my-[10vh]">
      <form onSubmit={handleSubmit} className="m-3 flex flex-col">
        <input
          required
          autoFocus
          name="image_url"
          placeholder="Image"
          value={input.image_url}
          onChange={handleInput}
          className="
            border-2 
            rounded-lg 
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
          className="border-2 rounded-lg my-4 pl-2 py-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
        />
        {input.image_url && (
          <img
            src={input.image_url}
            alt="image preview"
            className="w-full h-auto"
            onError={(e) =>
              (e.target.src =
                "https://cdn4.iconfinder.com/data/icons/ui-beast-3/32/ui-49-512.png")
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
  );
};
