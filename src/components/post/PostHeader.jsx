import React, { useEffect, useState } from "react";
import { IBtn, PBtn, Title } from "..";
import {
  BsThreeDots,
  BsPeopleFill,
  BsFillPersonCheckFill,
  BsMessenger,
  BsCheck2All,
} from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GiWorld } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import "./post.css";

const PostHeader = ({
  image,
  name,
  time,
  isFriend,
  mutual,
  nationality,
  team,
  role,
}) => {
  const [tooltip, setTooltip] = useState(false);
  const [isLow, setIsLow] = useState(false);
  // const handleTooltip = () => {
  //   setTooltip(!tooltip);
  // };

  useEffect(() => {
    const pHead = document.querySelector(".p_head");

    window.addEventListener("load", () => {
      pHead.getBoundingClientRect().top > 400
        ? setIsLow(true)
        : setIsLow(false);
    });
    window.addEventListener("scroll", () => {
      pHead.getBoundingClientRect().top > 400
        ? setIsLow(true)
        : setIsLow(false);
    });
  }, []);

  return (
    <div className=" p_head flex justify-between items-center text-gray-300">
      <div className="flex gap-2 relative">
        <div className=" w-10 h-10 overflow-hidden rounded-full">
          <img
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            src={image}
            alt={name}
            className="profile_image w-full h-full rounded-full bg-slate-200 cursor-pointer object-cover"
          />
        </div>
        <div className="text-sm flex flex-col justify-between">
          <div
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            className="user_name"
          >
            <Title title={name} post={true} />
          </div>
          <p className="text-xs font-light flex items-center gap-1">
            {" "}
            {time} . <GiWorld className="text-sm" />{" "}
          </p>
        </div>

        {/* for tooltip */}
        <div
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          className={` ${tooltip ? "block" : "hidden "} absolute  ${
            isLow ? " bottom-10 " : " top-10 "
          }  p-3 bg-slate-800 rounded-md border border-gray-600 min-w-[400px] max-w-[400px] flex flex-col gap-3 duration-500 ease-linear `}
        >
          <div className="flex gap-3 items-start">
            <div className=" w-20 h-16 overflow-hidden rounded-full">
              <img
                src={image}
                alt={name}
                className=" h-full w-full object-cover cursor-pointer"
              />
            </div>
            <div className="w-full">
              <h2 className="text-lg text-white font-semibold"> {name} </h2>
              <div className="flex items-start gap-3 mt-2">
                <div className="w-10">
                  <BsPeopleFill className="text-lg text-gray-400" />
                </div>
                <div className="">
                  <p>
                    {" "}
                    64 mutual friends : including
                    {mutual.map((fri, index) => {
                      return (
                        <span key={index} className="text-white font-semibold">
                          {" "}
                          {fri} {index < mutual.length - 1 ? "and" : ""}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-2">
                <div className="w-6">
                  <MdWork className="text-lg text-gray-400" />
                </div>
                <div className="">
                  <p className="text-white font-semibold">
                    {" "}
                    <span> {nationality} </span> Soccer Player{" "}
                  </p>
                  <p className="text-white font-semibold">
                    {" "}
                    {role} At <span> {team} </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {isFriend ? (
              <PBtn
                icon={<BsFillPersonCheckFill className="text-xl" />}
                title={"Friend"}
                lg={true}
                bg={"gray"}
              />
            ) : (
              <PBtn
                icon={<BsCheck2All className="text-xl" />}
                title={"Following"}
                lg={true}
                bg={"gray"}
              />
            )}
            <PBtn
              icon={<BsMessenger className="text-xl" />}
              title={"Message"}
              lg={true}
              bg={"blue"}
            />
            <PBtn icon={<BsThreeDots className="text-xl" />} bg={"gray"} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <IBtn
          icon={<BsThreeDots className="text-xl" />}
          sm={true}
          hover={"hover"}
          tooltip={"Options"}
        />
        <IBtn
          icon={<RxCross1 className="text-xl" />}
          sm={true}
          hover={"hover"}
          tooltip={"Close"}
        />
      </div>
    </div>
  );
};

export default PostHeader;
