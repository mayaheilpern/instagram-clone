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
      <button>Login</button>
    </form>
  );
};
