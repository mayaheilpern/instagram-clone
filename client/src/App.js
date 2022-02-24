import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { verifyUser } from "./services/api/userApiConfig";
import { Auth } from "./Screens/Auth";
import { Posts } from "./Screens/Posts";

function App() {
  // const [curentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const res = await verifyUser()
  //     setCurrentUser(res)
  //   }
  //   getUser()
  // }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
