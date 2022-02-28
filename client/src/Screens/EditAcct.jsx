import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../services/api/userApiConfig";

export const EditAcct = ({ currentUser, setToggle }) => {
  const [input, setInput] = useState(currentUser);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(currentUser.id, input);
    setToggle((prevToggle) => !prevToggle);
    navigate(`/acct/${currentUser.id}`);
  };

  return (
    <>
      <div className="rounded-xl shadow-xl border-2 mx-[12.5vw] my-[10vh]">
        <img
          src={currentUser.avatar}
          alt="user profile pic"
          className="w-20 block mx-auto py-4"
        />
        <form onSubmit={handleSubmit}>
          <div className="w-3/4">
            <div>
              <label htmlFor="image_url" className="ml-10">
                Image:
              </label>
              <input
                name="avatar"
                placeholder=" User Image"
                value={input.avatar}
                onChange={handleInput}
                className="border rounded-md my-2 mr-2 ml-10 border-black px-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="name" className="ml-10">
                Name:
              </label>
              <input
                autoFocus
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={handleInput}
                className="border rounded-md my-2 mr-2 ml-10 border-black px-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="ml-10">
                Email:
              </label>
              <input
                required
                name="email"
                placeholder="Email"
                value={input.email}
                onChange={handleInput}
                className="border rounded-md my-2 mr-2 ml-10 border-black px-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="username" className="ml-10">
                Username:
              </label>
              <input
                required
                name="username"
                placeholder="username"
                value={input.username}
                onChange={handleInput}
                className="border rounded-md my-2 mr-2 ml-10 border-black px-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="ml-10">
                Bio:
              </label>
              <textarea
                name="message"
                placeholder="Bio"
                value={input.message}
                onChange={handleInput}
                className="border rounded-md my-2 mr-2 ml-10 border-black px-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>
          <button className="block mx-auto bg-teal-500 rounded-lg px-5 py-1 mb-3 mt-2">
            Save
          </button>
        </form>
      </div>
    </>
  );
};
