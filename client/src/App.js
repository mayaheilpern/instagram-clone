import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { verifyUser } from "./services/userApiConfig";
import { Auth } from "./Screens/Auth";

function App() {
  const [cuurentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = async = () => {
      const res = await verifyUser()
      setCurrentUser(res)
    }
    getUser()
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
