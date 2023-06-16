import React, { useState } from "react";

const PostReact = ({ icon, bg, tooltip }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={` ${
        bg === "blue" ? "bg-blue-600" : "bg-red-600"
      } w-5 h-5 flex items-center justify-center rounded-full text-white text-xs cursor-pointer relative`}
    >
      {icon}

      {tooltip ? (
        <p
          className={` ${
            active ? "block" : "hidden"
          } absolute -bottom-10 left-0 px-3 py-[10px] bg-gray-300 bg-opacity-90 rounded-lg text-gray-700 text-xs`}
        >
          {" "}
          {tooltip}{" "}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostReact;
