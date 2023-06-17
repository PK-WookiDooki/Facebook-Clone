import React from "react";

const Title = ({ title, post, menu }) => {
  return (
    <h2
      className={` ${
        post ? "text-gray-200 hover:underline duration-100 cursor-pointer" : ""
      } capitalize font-semibold ${menu ? "text-gray-200" : "text-gray-400"}`}
    >
      {" "}
      {title}
    </h2>
  );
};

export default Title;
