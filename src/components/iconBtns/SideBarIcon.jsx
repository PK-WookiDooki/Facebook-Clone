import React from "react";
import { Link } from "react-router-dom";

const SideBarIcon = ({
  path,
  icon,
  title,
  tsm,
  color,
  status,
  image,
  noti,
}) => {
  return (
    <Link
      to={path}
      className={` ${tsm ? "text-sm h-10" : "h-14"} ${
        color === "blue" ? "text-blue-500" : ""
      } flex items-center ${
        icon || image ? "gap-3" : ""
      } px-2 rounded-md hover:bg-gray-700 hover:bg-opacity-80 max-w-sm w-full`}
    >
      <div className="relative">
        {icon ? (
          icon
        ) : image ? (
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img src={image} alt="" />
          </div>
        ) : (
          ""
        )}{" "}
        {status ? (
          <span className="w-2 h-2 bottom-1 right-0 rounded-full bg-green-700 absolute ring-2 ring-slate-900 "></span>
        ) : (
          ""
        )}{" "}
      </div>
      {noti ? (
        <div className="flex  justify-between w-full">
          {title}{" "}
          <p className="text-sm w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white">
            {" "}
            2{" "}
          </p>{" "}
        </div>
      ) : (
        <div className="">{title}</div>
      )}
    </Link>
  );
};

export default SideBarIcon;
