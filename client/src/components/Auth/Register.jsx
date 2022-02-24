import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../services/api/userApiConfig";

export const Register = () => {
  const defaultInput = {
    username: "",
    email: "",
    password: "",
    name: "",
    message: "",
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
    await signupUser(input);
    setInput(defaultInput);
    navigate("/");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        name="username"
        placeholder="username"
        value={input.username}
        onChange={handleInput}
      />
      <input
        name="email"
        type="email"
        placeholder="email"
        value={input.email}
        onChange={handleInput}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={input.password}
        onChange={handleInput}
      />
      <button>Register</button>
    </form>
  );
};
