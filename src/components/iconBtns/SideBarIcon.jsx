import React from "react";
import { Link } from "react-router-dom";

const SideBarIcon = ({ path, icon, title, tsm, status, image }) => {
  return (
    <Link
      to={path}
      className={` ${
        tsm ? "text-xs h-10" : "h-14"
      } flex items-center gap-3  px-2 rounded-md hover:bg-gray-700 hover:bg-opacity-80 max-w-sm w-full`}
    >
      <div className="relative">
        {icon ? (
          icon
        ) : (
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img src={image} alt="" />
          </div>
        )}{" "}
        {status ? (
          <span className="w-2 h-2 bottom-1 right-0 rounded-full bg-green-700 absolute ring-2 ring-slate-900 "></span>
        ) : (
          ""
        )}{" "}
      </div>
      {title}
    </Link>
  );
};

export default SideBarIcon;
