import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { verifyUser } from "./services/api/userApiConfig";
import { Auth } from "./Screens/Auth";
import { Posts } from "./Screens/Posts";
import { Acct } from "./Screens/Acct";

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/acct/:userid/*" element={<Acct currentUser={currentUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
