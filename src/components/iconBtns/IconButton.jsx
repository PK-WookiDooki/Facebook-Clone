import React, { useState } from "react";

const IconButton = ({ icon, hover, hidden, noti, tooltip }) => {
  const [active, setActive] = useState(false);
  const handleTooltip = () => {
    setActive(!active);
  };

  return (
    <button
      onMouseEnter={handleTooltip}
      onMouseLeave={handleTooltip}
      className={`text-lg w-10 h-10 rounded-full bg-gray-700 bg-opacity-90 flex items-center justify-center text-white ${
        hover === "hover" ? "hover:bg-gray-600 bg-opacity-100" : ""
      } duration-100 ${hidden ? "lg:hidden" : ""} relative`}
    >
      {icon}
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
          className={` ${
            active ? "block" : "hidden"
          } absolute -bottom-12 -right-1 px-3 py-2 bg-gray-300 bg-opacity-90 rounded-lg text-gray-700 text-sm`}
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
