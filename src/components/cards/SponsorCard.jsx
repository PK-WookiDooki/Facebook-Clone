import React from "react";
import { Link } from "react-router-dom";

const SponsorCard = ({ path, desc, image, link }) => {
  return (
    <Link
      to={path}
      className=" flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-md max-h-32"
    >
      <img src={image} alt="" className="w-36 rounded" />
      <div className="">
        <p> {desc} </p>
        <span className="text-sm">
          {link}
        </span>
      </div>
    </Link>
  );
};

export default SponsorCard;
