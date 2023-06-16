import React from "react";

const PostBtn = ({ icon, title, border, color, lg, bg, image }) => {
  return (
    <button
      className={` ${border ? " border rounded-full" : "rounded-md"} ${
        color === "blue"
          ? " border-blue-500 text-blue-500 hover:bg-opacity-50"
          : ""
      } flex items-center justify-center gap-2 text-gray-300  h-10  hover:bg-gray-600 ${
        lg ? "text-base min-w-[150px] max-w-[150px] " : "text-sm"
      } ${image ? "px-3" : "px-4"} ${
        bg === "blue"
          ? " bg-blue-600 hover:bg-blue-500 "
          : bg === "gray"
          ? "bg-gray-700"
          : ""
      } font-semibold duration-100`}
    >
      {icon ? (
        icon
      ) : image ? (
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <img src={image} alt="" className=" object-contain" />
        </div>
      ) : (
        ""
      )}
      {title}
    </button>
  );
};

export default PostBtn;
