import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLikesByUser } from "../../services/api/postLikeApiConfig";

export const Likes = ({ userid }) => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const getLikes = async () => {
      const res = await getLikesByUser(userid);
      setLikes(res);
    };
    getLikes();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {likes.map((like) => {
        return (
          <div key={like.id}>
            <Link to={`/${like.post.id}`}>
              <img
                src={like.post.image_url}
                alt={`img for post ${like.post.id}`}
                className="w-20 h-20 m-1 rounded-lg"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
