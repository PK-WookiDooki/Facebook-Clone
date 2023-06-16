import React from "react";
import {
  BsFillHeartFill,
  BsEmojiKissFill,
  BsEmojiLaughingFill,
  BsEmojiAngryFill,
  BsEmojiDizzyFill,
} from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { FaShare, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { PBtn } from "..";
import profile from "../../assets/images/profile.jpg";
import PostReact from "./PostReact";

const PostFooter = ({ likes, comments, shares }) => {
  return (
    <section className="mt-5 overflow-hidden font-light tracking-wide">
      <div className="pb-2 border-b border-gray-600 flex items-center justify-between">
        <div className="flex items-center">
          <div className="z-[2] ring-0 ring-offset-2 ring-offset-slate-800 rounded-full">
            <PostReact icon={<FaThumbsUp />} tooltip={"Like"} bg={"blue"} />
          </div>
          <div className=" z-[0] -ml-[2px] ">
            <PostReact icon={<BsFillHeartFill />} tooltip={"Love"} bg={"red"} />
          </div>
          <p className="text-gray-400 ml-2 tracking-wide cursor-pointer  ">
            {likes}
          </p>
        </div>
        <div className=" flex items-center gap-2 text-gray-400 ">
          <p className=" hover:underline hover:text-gray-300 cursor-pointer">
            {" "}
            {comments} comments{" "}
          </p>
          <p className=" hover:underline hover:text-gray-300 cursor-pointer">
            {" "}
            {shares} shares{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <PBtn
          icon={<FaRegThumbsUp className="text-xl" />}
          title={"Like"}
          lg={true}
        />
        <PBtn
          icon={<BiComment className="text-xl" />}
          title={"Comment"}
          lg={true}
        />
        <PBtn
          icon={<FaShare className="text-xl" />}
          title={"Share"}
          lg={true}
        />
        <div className="hidden md:block">
          <PBtn image={profile} />
        </div>
      </div>
    </section>
  );
};

export default PostFooter;
