import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api/userApiConfig";

export const Login = () => {
  const defaultInput = {
    email: "",
    password: "",
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
    await loginUser(input);
    setInput(defaultInput);
    navigate("/");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="w-3/4 md:10/12 md:mx-auto xl:w-1/2">
        <div className="md:flex md:items-center md:justify-between">
          <label htmlFor="email" className="ml-10">
            Email:
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="email"
            value={input.email}
            className="border rounded-md my-2 mr-2 ml-10 border-black px-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 md:w-full"
          />
        </div>
        <div className="md:flex md:items-center md:justify-between">
          <label htmlFor="username" className="ml-10">
            Password:
          </label>
          <input
            required
            name="password"
            type="password"
            placeholder="password"
            value={input.password}
            onChange={handleInput}
            className="border rounded-md my-2 mr-2 ml-10 border-black px-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 md:w-full"
          />
        </div>
        <button
          type="submit"
          className="block bg-teal-500 rounded-lg px-5 py-1 m-auto mt-4"
        >
          Login
        </button>
      </div>
    </form>
  );
};
