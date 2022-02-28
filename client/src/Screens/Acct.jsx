import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NavTab } from "../components/NavTab";
import { Tab } from "../components/Tab";
import { Posts } from "../components/Acct/Posts";
import { Mentions } from "../components/Acct/Mentions";
import { Likes } from "../components/Acct/Likes";
import { getByUser } from "../services/api/postsApiConfig";
import { getOneUser } from "../services/api/userApiConfig";

export const Acct = ({ currentUser }) => {
  const tabs = ["Posts", "Likes", "Mentions"];
  const { userid } = useParams();

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(tabs[0]);

  useEffect(() => {
    const getUser = async () => {
      const res = await getOneUser(userid);
      setUser(res);
      const resp = await getByUser(userid);
      setPosts(resp);
    };
    getUser();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt="user profile img"
          className="w-10"
          onError={(e) => {
            e.target.src =
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTBJlhH4ljFf4zwPw6qDY1vOBTVnkEdg3jMw44-OhLq2AazLtw";
          }}
        />
        <h1>{user.username}</h1>
        <p>{user.message}</p>
      </div>
      {currentUser.id === user.id && (
        <Link to={`/acct/${userid}/edit`}>Edit Account</Link>
      )}
      <NavTab tabs={tabs} selected={selected} setSelected={setSelected}>
        <Tab isSelected={selected === tabs[0]}>
          <Posts posts={posts} />
        </Tab>
        <Tab isSelected={selected === tabs[1]}>
          <Likes userid={userid} />
        </Tab>
        <Tab isSelected={selected === tabs[2]}>
          <Mentions />
        </Tab>
      </NavTab>
    </>
  );
};
