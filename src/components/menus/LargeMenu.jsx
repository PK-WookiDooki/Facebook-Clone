import React from "react";
import { SBI } from "..";
import {
  BsFlagFill,
  BsBookFill,
  BsCalendar2EventFill,
  BsPeopleFill,
  BsSearch,
  BsStarFill,
  BsClockFill,
  BsYoutube,
  BsFillHeartFill,
  BsMessenger,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GiSwipeCard, GiBonsaiTree } from "react-icons/gi";
import { SiFacebookgaming } from "react-icons/si";
import { IoCreateOutline } from "react-icons/io5";
import { IoLogoGameControllerA } from "react-icons/io";
import { MdMovieFilter, MdCrisisAlert } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { ImStatsBars } from "react-icons/im";
import { FaVideo, FaImages, FaBullhorn, FaNewspaper } from "react-icons/fa";

const LargeMenu = () => {
  return (
    <section className="p-3 border border-gray-600 rounded-md bg-slate-800 text-gray-300 tracking-wide min-h-[90vh] max-h-[90vh] overflow-hidden">
      <h2 className="text-gray-200 text-xl font-bold mb-2">Menu</h2>

      <div className="flex flex-row gap-3 items-start  ">
        {/* more menu */}
        <div className=" w-full bg-slate-900 p-3 rounded-md h-[82vh] overflow-y-scroll scroll-smooth ">
          {/* search box */}
          <div
            className={` h-10 w-full rounded-full lg:flex items-center justify-center bg-gray-700 px-3 overflow-hidden`}
          >
            <BsSearch className={`text-white text-lg duration-200 w-10`} />

            <input
              type="text"
              placeholder="Search Menu"
              className={`w-full bg-transparent h-full outline-none placeholder:text-sm caret-white duration-200 text-gray-300 `}
              onFocus={() => {
                setActive(true);
                setFocus(true);
              }}
            />
          </div>

          <div className="mt-3">
            {/* social */}
            <div className="pb-3 mb-3 border-b border-gray-600">
              <h2 className="text-gray-200 text-lg font-bold mb-2">Social</h2>
              <div className="">
                <SBI
                  icon={
                    <BsCalendar2EventFill className="text-3xl text-red-600" />
                  }
                  title={"Events"}
                  desc={
                    "Organize or find events and other things to do online and nearby."
                  }
                />
                <SBI
                  icon={<BsPeopleFill className="text-3xl text-sky-500" />}
                  title={"Friends"}
                  desc={"Search for friends or people you may know."}
                />
                <SBI
                  icon={
                    <HiUserGroup className="text-3xl bg-blue-600 rounded-full" />
                  }
                  title={"Group"}
                  desc={"Connect with people who share your interests."}
                />
                <SBI
                  icon={<FaNewspaper className="text-3xl text-blue-600" />}
                  title={"News Feed"}
                  desc={"See relevant posts from people and pages you follow."}
                />
                <SBI
                  icon={<BsStarFill className="text-3xl text-yellow-400" />}
                  title={"Favorites"}
                  desc={"View posts by Favorite."}
                />
                <SBI
                  icon={<BsClockFill className="text-3xl text-sky-600" />}
                  title={"Most Recent"}
                  desc={
                    "See the most recent posts from your friends, group, Pages and more."
                  }
                />
                <SBI
                  icon={<BsFlagFill className="text-3xl text-amber-700" />}
                  title={"Pages"}
                  desc={"Discover and connect with business on Facebook."}
                />
              </div>
            </div>
            {/* entertainment */}
            <div className="pb-3 mb-3 border-b border-gray-600">
              <h2 className="text-gray-200 text-lg font-bold mb-2">
                Entertainment
              </h2>
              <div className="">
                <SBI
                  icon={<SiFacebookgaming className="text-3xl text-sky-500" />}
                  title={"Gaming Video"}
                  desc={
                    "Watch and connect with your favorite games and streamers."
                  }
                />
                <SBI
                  icon={
                    <IoLogoGameControllerA className="text-3xl text-sky-500" />
                  }
                  title={"Play Games"}
                  desc={"Play your favorite games."}
                />
                <SBI
                  icon={<BsYoutube className="text-3xl text-sky-500" />}
                  title={"Watch"}
                  desc={
                    "A video destination personalized to your interests and connections."
                  }
                />
              </div>
            </div>
            {/* Shopping */}
            <div className="pb-3 mb-3 border-b border-gray-600">
              <h2 className="text-gray-200 text-lg font-bold mb-2">Shopping</h2>
              <div className="">
                <SBI
                  icon={<GiSwipeCard className="text-3xl text-blue-600" />}
                  title={"Orders and Payments"}
                  desc={
                    "A seamless, secure way to pay on the apps you already use."
                  }
                />
              </div>
            </div>
            {/* Personal */}
            <div className="pb-3 mb-3 border-b border-gray-600">
              <h2 className="text-gray-200 text-lg font-bold mb-2">Personal</h2>
              <div className="">
                <SBI
                  icon={<FaImages className="text-3xl text-green-400" />}
                  title={"Recent ad activity"}
                  desc={"See all the ads you interacted with on Facebook."}
                />
                <SBI
                  icon={
                    <RxCounterClockwiseClock className="text-3xl text-blue-400" />
                  }
                  title={"Memories"}
                  desc={"Browse your old photos, videos and posts on Facebook."}
                />
                <SBI
                  icon={
                    <BsFillBookmarkCheckFill className="text-3xl text-purple-400" />
                  }
                  title={"Saved"}
                  desc={
                    "Find posts, photos and videos that you saved for later."
                  }
                />
              </div>
            </div>
            {/* Professional */}
            <div className="pb-3 mb-3 border-b border-gray-600">
              <h2 className="text-gray-200 text-lg font-bold mb-2">
                Professional
              </h2>
              <div className="">
                <SBI
                  icon={<ImStatsBars className="text-3xl text-blue-500" />}
                  title={"Ads Manager"}
                  desc={"Create, manage and track the performance of your ads."}
                />
                <SBI
                  icon={<FaBullhorn className="text-3xl text-sky-500" />}
                  title={"Ad Center"}
                  desc={
                    "Manage all the ads you create in Pages, with streamlined features."
                  }
                />
              </div>
            </div>
            {/* Community Resources */}
            <div className="pb-3 mb-3 border-b border-gray-600">
              <h2 className="text-gray-200 text-lg font-bold mb-2">
                Community Resources
              </h2>
              <div className="">
                <SBI
                  icon={<GiBonsaiTree className="text-3xl text-green-500" />}
                  title={"Climate Science Center"}
                  desc={"Learn about climate change and its effect."}
                />
                <SBI
                  icon={<MdCrisisAlert className="text-3xl text-sky-400" />}
                  title={"Crisis response"}
                  desc={
                    "Find the latest updates for event crises happening around the world."
                  }
                />
                <SBI
                  icon={<BsFillHeartFill className="text-3xl text-red-500" />}
                  title={"Fundraisers"}
                  desc={
                    "Donate and raise money for nonprofits and personal causes."
                  }
                />
              </div>
            </div>
            {/* More from Meta */}
            <div className="pb-3">
              <h2 className="text-gray-200 text-lg font-bold mb-2">
                More from Meta
              </h2>
              <div className="">
                <SBI
                  icon={<BsMessenger className="text-3xl text-green-300" />}
                  title={"Messenger Kids"}
                  desc={"Let kids message with close friends and family"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* create menu */}
        <div className=" w-[65%] p-2 bg-slate-900 rounded-md sticky top-9">
          <h2 className="text-gray-200 text-xl font-bold my-2">Create</h2>

          {/* account */}
          <div className="flex flex-col gap-1 pb-2 border-b border-gray-600">
            <SBI
              icon={<IoCreateOutline className="text-2xl" />}
              title={"Post"}
            />
            <SBI icon={<BsBookFill className="text-2xl" />} title={"Story"} />
            <SBI icon={<MdMovieFilter className="text-2xl" />} title={"Reel"} />
            <SBI icon={<FaVideo className="text-2xl" />} title={"Room"} />
          </div>

          {/* for page */}
          <div className="mt-2 flex flex-col gap-1">
            <SBI icon={<BsFlagFill className="text-2xl" />} title={"Page"} />
            <SBI icon={<FaBullhorn className="text-2xl" />} title={"Ad"} />
            <SBI icon={<HiUserGroup className="text-2xl" />} title={"Group"} />
            <SBI
              icon={<BsCalendar2EventFill className="text-2xl" />}
              title={"Event"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeMenu;
