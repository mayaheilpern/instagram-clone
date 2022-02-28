import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { verifyUser } from "./services/api/userApiConfig";
import { Auth } from "./Screens/Auth";
import { Posts } from "./Screens/Posts";
import { PostDetails } from "./Screens/PostDetails";
import { AddPost } from "./Screens/AddPost";
import { Acct } from "./Screens/Acct";
import { EditAcct } from "./Screens/EditAcct";
import { Layout } from "./Screens/Layout";

function App() {
  const [toggle, setToggle] = useState(false);
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [toggle])

  return (
    <Layout currentUser={currentUser}>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postid" element={<PostDetails currentUser={currentUser}/>} />
        <Route path="/post" element={<AddPost />} />
        <Route path="/acct/:userid" element={<Acct currentUser={currentUser} />} />
        <Route path="/acct/:userid/edit" element={<EditAcct currentUser={currentUser} setToggle={setToggle}/>} />
      </Routes>
    </Layout>
  );
}

export default App;
