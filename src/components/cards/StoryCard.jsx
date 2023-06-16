import React from "react";
import { BsPlusLg } from "react-icons/bs";

const StoryCard = ({ image, user, profile, me }) => {
  return (
    <div className=" h-48 max-w-[120px] min-w-[120px] w-full rounded-md overflow-hidden cursor-pointer group relative">
      <div className="h-full w-full">
        <img
          src={image}
          alt=""
          className="h-full w-full group-hover:scale-110 duration-150 group-hover:opacity-90 object-cover"
        />
        {profile ? (
          <div className=" absolute top-3 left-3 h-10 w-10 rounded-full overflow-hidden bg-red-200 ">
            <img src={profile} alt="" />
          </div>
        ) : (
          ""
        )}
        {user ? (
          <h2 className="absolute bottom-2 left-2 text-sm font-semibold text-gray-300">
            {" "}
            {user}{" "}
          </h2>
        ) : (
          ""
        )}

        {me ? (
          <div className="absolute bottom-0 left-0 w-full text-sm text-center pb-2 pt-5 bg-gray-800">
            <p>Create Story</p>
            <span className="text-2xl absolute transform top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center ring-0 ring-offset-4 ring-offset-gray-800">
              {" "}
              <BsPlusLg />{" "}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default StoryCard;
