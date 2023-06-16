import React from "react";
import { SBI, Title } from "..";
import {
  BsPersonCircle,
  BsPeopleFill,
  BsClockFill,
  BsYoutube,
  BsFillBookmarkCheckFill,
  BsFlagFill,
} from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import { SiPowerpages } from "react-icons/si";
import profile from "../../assets/images/profile.jpg";

const HomeLeftSidebar = () => {
  return (
    <section className="sticky top-20 text-gray-200 lg:flex flex-col gap-1 hidden w-full max-w-xs ">
      <div className="text-white flex flex-col gap-1 border-b pb-2 border-gray-600">
        <SBI image={profile} title={"Wooki Dooki"} path={"/account"} />
        <SBI
          icon={<BsPeopleFill className="text-3xl w-10" />}
          title={"Friends"}
          path={"/account"}
        />
        <SBI
          icon={<BsClockFill className="text-3xl w-10" />}
          title={"Most Recent"}
          path={"/recent_posts"}
        />
        <SBI
          icon={<BsYoutube className="text-3xl w-10" />}
          title={"Watch"}
          path={"/watch"}
        />
        <SBI
          icon={<RxCounterClockwiseClock className="text-3xl w-10" />}
          title={"Memories"}
          path={"/account"}
        />
        <SBI
          icon={<BsFillBookmarkCheckFill className="text-3xl w-10" />}
          title={"Saved"}
          path={"/account"}
        />
        <SBI
          icon={<BsFlagFill className="text-3xl w-10" />}
          title={"Pages"}
          path={"/pages"}
        />
        <SBI
          icon={
            <RiArrowDownSLine className="text-xs w-10 h-10 rounded-full bg-gray-800" />
          }
          title={"See More"}
        />
      </div>
      <div className="mt-2 group flex flex-col">
        <div className="flex items-center justify-between h-10">
          <Title title={"Your Shortcuts"} />
          <button className="text-blue-400 hidden group-hover:block p-1 px-2 hover:bg-gray-700 hover:bg-opacity-90 rounded-md text-sm">
            Edit
          </button>
        </div>
        <div className="">
          <SBI
            icon={<SiPowerpages className="text-3xl w-10" />}
            title={"My Page"}
          />
        </div>
        <div className="text-xs text-gray-400 tracking-wide mt-5">
          <p>Privacy · Terms · Advertising · Ad Choices · Cookies · </p>
          <p>More · Meta © 2023</p>
        </div>
      </div>
    </section>
  );
};

export default HomeLeftSidebar;
