import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../services/api/userApiConfig";

export const Register = () => {
  const defaultInput = {
    username: "",
    email: "",
    password_digest: "",
    name: "",
    message: "",
  };

  const [input, setInput] = useState(defaultInput);
  // const [showPass, setShowPass] = useState(false);
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
    await signupUser(input);
    setInput(defaultInput);
    navigate("/");
  };

  // const showPassword = showPass ? "text" : "password";

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="w-3/4 md:10/12 md:mx-auto xl:w-1/2">
        <div className="md:flex md:items-center md:justify-between">
          <label htmlFor="name" className="ml-10">
            Username:
          </label>
          <input
            autoFocus
            name="username"
            placeholder="username"
            value={input.username}
            onChange={handleInput}
            className="border rounded-md my-2 mr-2 ml-10 border-black px-1 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 md:w-full"
          />
        </div>
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
            onChange={handleInput}
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
          {/* {showPass ? (
            <button onClick={() => setShowPass(false)} type="button">
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
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </button>
          ) : (
            <button onClick={() => setShowPass(true)} type="button">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          )} */}
        </div>
        <button
          type="submit"
          className="block bg-teal-500 rounded-lg px-5 py-1 m-auto mt-4"
        >
          Register
        </button>
      </div>
    </form>
  );
};
