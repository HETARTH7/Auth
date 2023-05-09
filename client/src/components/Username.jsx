import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

const Username = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(username);
    e.preventDefault();
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello there</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us
            </span>
          </div>
          <form className="py-1" onSubmit={handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src="" alt=""></img>
            </div>
            <div className="textbox flex flex-col item-center gap-6">
              <input
                onChange={handleChange}
                type="text"
                placeholder="Username"
              />
              <button type="submit">Lets go</button>
            </div>
            <div className="text-center py-4">
              <span>
                Not a member{" "}
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
