import React from "react";
import { IBtn, SBI, SCard, Title } from "..";
import { Link } from "react-router-dom";
import { SiPowerpages } from "react-icons/si";
import {
  BsBellFill,
  BsThreeDots,
  BsPersonCircle,
  BsPeopleFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaBullhorn, FaVideo, FaSearch } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import { friends, groups } from "../../data.json";

const HomeRightSidebar = () => {
  return (
    <section className=" sticky top-20 w-full max-w-sm text-gray-300 hidden lg:block">
      {/* Sponsors */}
      <div className="flex flex-col gap-2 pb-2 border-b border-gray-600 mb-2">
        <Title title={"Sponsored"} />
        <SCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvnqWwwdTQrIqQUrOrNq_RlQ3fEtC_W-8yXEFyNnRAg&usqp=CAU&ec=48665698"
          }
          desc={"Apple California Streaming Event Wallpaper"}
          link={"www.apple.com"}
          path={"https://www.apple.com"}
        />
        <SCard
          image={
            "https://cutewallpaper.org/22/retro-4k-wallpapers/172211928.jpg"
          }
          desc={"Retro Lamborghini 4K Wallpaper"}
          link={"www.wallpaper.com"}
          path={"https://www.wallpaper.com"}
        />
      </div>

      {/* Page & Profile */}
      <div className="flex flex-col gap-2 pb-2 border-b border-gray-600 mb-2">
        <Title title={"Your pages and profiles"} />
        <div className="">
          <SBI
            icon={<SiPowerpages className="text-3xl w-8" />}
            title={"My Page"}
            path={"page"}
          />
          <div className="pl-3">
            <SBI
              icon={<BsBellFill className="text-base w-8" />}
              title={"5 Notifications"}
              path={"page"}
              tsm={true}
            />
            <SBI
              icon={<AiOutlineUserSwitch className="text-base w-8" />}
              title={"Switch into Page"}
              path={"page"}
              tsm={true}
            />
            <SBI
              icon={<FaBullhorn className="text-base w-8" />}
              title={"Create Promotions"}
              path={"page"}
              tsm={true}
            />
          </div>
        </div>
      </div>

      {/* Friend Reqs */}
      <div className="flex flex-col gap-2 pb-2 border-b border-gray-600 mb-2 group">
        <div className="flex items-center justify-between h-10">
          <Title title={"Friend requests"} />
          <button className="text-blue-400 hidden group-hover:block p-1 px-2 hover:bg-gray-700 hover:bg-opacity-90 rounded-md text-sm">
            See All
          </button>
        </div>
      </div>

      {/* Contacts */}
      <div className="flex flex-col gap-2 pb-2 border-b border-gray-600 mb-2">
        <div className="flex items-center justify-between">
          <Title title={"Contacts"} />
          <div className="flex gap-1 items-center">
            <IBtn
              icon={<FaVideo className="text-sm" />}
              sm={true}
              hover={"hover"}
              tooltip={"New Call"}
            />
            <IBtn
              icon={<FaSearch className="text-sm" />}
              sm={true}
              hover={"hover"}
              tooltip={"Search By Name or Group"}
            />
            <IBtn
              icon={<BsThreeDots className="text-sm" />}
              sm={true}
              hover={"hover"}
              tooltip={"Options"}
            />
          </div>
        </div>
        <div className="">
          {friends?.map((friend) => {
            return (
              <SBI
                key={friend.id}
                icon={<BsPersonCircle className="text-4xl w-8" />}
                title={friend.name}
                path={"/friend/messenger"}
                status={true}
              />
            );
          })}
        </div>
      </div>

      {/* Group conversations */}
      <div className="flex flex-col gap-2 pb-2 border-b border-gray-600 mb-2">
        <Title title={"Group Conversations"} />
        <div className="">
          {groups?.map((friend) => {
            return (
              <SBI
                key={friend.id}
                icon={<BsPeopleFill className="text-3xl w-8" />}
                title={friend.name}
                path={"/friend/messenger"}
              />
            );
          })}
          <SBI
            icon={<BsFillPlusCircleFill className="text-3xl w-8 opacity-70" />}
            title={"Create new group"}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeRightSidebar;
