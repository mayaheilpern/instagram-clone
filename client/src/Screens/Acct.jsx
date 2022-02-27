import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NavTab } from "../components/NavTab";
import { Tab } from "../components/Tab";
import { Posts } from "../components/Acct/Posts";
import { Comments } from "../components/Acct/Comments";
import { Likes } from "../components/Acct/Likes";
import { Drafts } from "../components/Acct/Drafts";
import { getByUser } from "../services/api/postsApiConfig";
import { getOneUser } from "../services/api/userApiConfig";
import userAvatar from "../services/images/userAvatar.png";

export const Acct = ({ currentUser }) => {
  const tabs = ["Posts", "Comments", "Likes", "Drafts"];
  const { userid } = useParams();

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(tabs[0]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const res = await getOneUser(userid);
      setUser(res);
      const resp = await getByUser(userid);
      setPosts(resp);
    };
    getUser();
  }, [toggle]);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <div className="flex flex-col items-center">
        <img src={userAvatar} alt="user profile img" className="w-10" />
        <h1>{user.username}</h1>
        <p>{user.message}</p>
      </div>
      <Link to={`/acct/${userid}/edit`}>Edit Account</Link>
      <NavTab
        className="flex"
        tabs={tabs}
        selected={selected}
        setSelected={setSelected}
      >
        <Tab isSelected={selected === tabs[0]}>
          <Posts posts={posts} />
        </Tab>
        <Tab isSelected={selected === tabs[1]}>
          <Comments />
        </Tab>
        <Tab isSelected={selected === tabs[2]}>
          <Likes />
        </Tab>
        {currentUser?.id === user.id ? (
          <Tab isSelected={selected === tabs[3]}>
            <Drafts />
          </Tab>
        ) : null}
      </NavTab>
    </>
  );
};
