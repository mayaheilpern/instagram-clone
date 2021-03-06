import { Link } from "react-router-dom";

export const Posts = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-start md:mx-16">
      {posts.length === 0 ? (
        <p className="mx-auto mt-10">No Posts</p>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <Link to={`/${post.id}`}>
                <img
                  src={post.image_url}
                  alt={`posts number ${post.id}`}
                  className="w-20 h-20 m-1 rounded-lg"
                />
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};
