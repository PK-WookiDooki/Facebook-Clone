import React from "react";

const Title = ({ title, post }) => {
  return (
    <h2
      className={` ${
        post
          ? "text-gray-200 hover:underline duration-100 cursor-pointer"
          : "text-gray-400"
      } capitalize font-semibold`}
    >
      {" "}
      {title}
    </h2>
  );
};

export default Title;
