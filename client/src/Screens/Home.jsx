import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { verifyUser } from "../services/api/userApiConfig";
import { Posts } from "./Posts";
import { PostDetails } from "./PostDetails";
import { AddPost } from "./AddPost";
import { Acct } from "./Acct";
import { EditAcct } from "./EditAcct";
import { Layout } from "./Layout";
import { PrivateRoute } from "../components/Home/PrivateRoute";

export const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      setCurrentUser(user);
    };
    getUser();
  }, [toggle]);

  return (
    <>
      <Layout currentUser={currentUser}>
        <Routes>
          <Route exact element={<PrivateRoute />}>
            <Route path="/" element={<Posts />} />
          </Route>
          <Route exact element={<PrivateRoute />}>
            <Route path="/post" element={<AddPost />} />
          </Route>
          <Route exact element={<PrivateRoute />}>
            <Route
              path="/acct/:userid"
              element={<Acct currentUser={currentUser} />}
            />
          </Route>
          <Route exact element={<PrivateRoute />}>
            <Route
              path="/:postid"
              element={<PostDetails currentUser={currentUser} />}
            />
          </Route>
          <Route exact element={<PrivateRoute />}>
            <Route
              path="/acct/:userid/edit"
              element={
                <EditAcct currentUser={currentUser} setToggle={setToggle} />
              }
            />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};
