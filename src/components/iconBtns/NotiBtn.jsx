import React from "react";
import { IBtn } from "..";
import { BsThreeDots } from "react-icons/bs";

const NotiBtn = ({ image, desc, timeAgo, isNew, type, fw }) => {
  return (
    <section className="flex items-center gap-2 justify-between p-1 rounded-md cursor-pointer hover:bg-gray-700 hover:bg-opacity-90 group relative">
      <div className="">
        <div className="h-14 w-14 bg-red-200 rounded-full overflow-hidden">
          <img src={image} alt="" className=" h-full w-full object-cover " />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p
          className={` text-sm ${
            isNew ? "text-gray-300" : "text-gray-400"
          } text-base ${fw === "base" ? "font-base" : "font-semibold"} `}
        >
          {" "}
          {desc}{" "}
        </p>
        <p className="text-xs text-blue-500 font-medium"> {timeAgo} ago </p>
      </div>
      <div className=" self-stretch w-8 flex items-center justify-center">
        {isNew ? (
          <span className=" block w-3 h-3 rounded-full bg-blue-500"></span>
        ) : (
          ""
        )}
      </div>

      <div className=" hidden group-hover:block absolute right-7 ">
        <IBtn
          icon={<BsThreeDots className="text-sm" />}
          hover={"hover"}
          border={true}
        />
      </div>
    </section>
  );
};

export default NotiBtn;
