import React, { useState } from "react";

const IconButton = ({
  icon,
  hover,
  hidden,
  noti,
  tooltip,
  sm,
  image,
  border,
}) => {
  const [active, setActive] = useState(false);

  return (
    <button
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`text-lg ${
        sm ? " w-8 h-8 " : "w-10 h-10 bg-gray-700 bg-opacity-90 text-white "
      } rounded-full  flex items-center justify-center ${
        border ? "border border-gray-800 shadow-lg" : ""
      }  ${
        hover === "hover" ? "hover:bg-gray-600 bg-opacity-900" : ""
      } duration-100 ${hidden ? "lg:hidden" : ""} relative`}
    >
      {icon ? (
        icon
      ) : (
        <div className="w-full h-full overflow-hidden rounded-full">
          <img src={image} alt="" />
        </div>
      )}
      {noti ? (
        <span className="text-xs flex items-center justify-center absolute -top-2 -right-1 w-5 h-5 rounded-full bg-red-600">
          {" "}
          {noti}{" "}
        </span>
      ) : (
        ""
      )}
      {tooltip ? (
        <p
          className={` ${active ? "block" : "hidden"} absolute ${
            sm ? "-bottom-10" : "-bottom-12"
          }  right-0 px-3 py-[10px] bg-gray-300 bg-opacity-90 rounded-lg text-gray-700 text-xs min-w-max z-[5] `}
        >
          {" "}
          {tooltip}{" "}
        </p>
      ) : (
        ""
      )}
    </button>
  );
};

export default IconButton;
