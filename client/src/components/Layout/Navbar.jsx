import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddPost } from "../AddPost";

export const Navbar = ({ currentUser }) => {
  const [postModal, setPostModal] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleClick = () => {
    if (currentUser.id) {
      setPostModal(!postModal);
    } else {
      navigate("/auth");
    }
  };

  return (
    <>
      <div className="bg-teal-500 flex justify-between py-6">
        <Link to="/" className="text-white text-xl px-5">
          Logo
        </Link>
        <div className="flex">
          <Link to="/" className="px-1.5 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {window.innerWidth >= 768 && (
              <p className="text-white px-2">Home</p>
            )}
          </Link>
          <button onClick={handleClick} className="px-1.5 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            {window.innerWidth >= 768 && (
              <p className="text-white px-2">Add Post</p>
            )}
          </button>
          <Link to="/" className="px-1.5 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {window.innerWidth >= 768 && (
              <p className="text-white px-2">Notifications</p>
            )}
          </Link>
          <Link
            to={`/acct/${currentUser.id}`}
            className="px-1.5 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {window.innerWidth >= 768 && (
              <p className="text-white px-2">Account</p>
            )}
          </Link>
          {currentUser.id ? (
            <button onClick={logout} className="px-1.5 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              {window.innerWidth >= 768 && (
                <p className="text-white px-2">Logout</p>
              )}
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="px-1.5 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              {window.innerWidth >= 768 && (
                <p className="text-white px-2">Login/Signup</p>
              )}
            </button>
          )}
        </div>
      </div>
      {postModal && <AddPost setPostModal={setPostModal} />}
    </>
  );
};
