import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./btn.css";

const IconLink = ({ icon, tooltip, path, hover }) => {
  const [active, setActive] = useState(false);
  // const handleTooltip = () => {
  //   setActive(!active);
  // };

  return (
    <NavLink
      to={path}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={` nav-link text-3xl w-28 h-16 border-b-[3px] flex items-center justify-center text-gray-300 hover:bg-gray-600 hover:rounded-md hover:bg-opacity-70 duration-200 relative `}
    >
      {icon}
      {tooltip ? (
        <p
          className={` ${
            active ? "block" : "hidden"
          } absolute -bottom-10 px-3 py-[10px] bg-gray-300 bg-opacity-90 rounded-lg text-gray-700 text-xs`}
        >
          {" "}
          {tooltip}{" "}
        </p>
      ) : (
        ""
      )}
    </NavLink>
  );
};

export default IconLink;
