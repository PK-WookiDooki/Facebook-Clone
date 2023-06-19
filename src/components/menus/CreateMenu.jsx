import React from "react";
import { SBI } from "..";
import {
  BsFlagFill,
  BsBookFill,
  BsCalendar2EventFill,
  BsPeopleFill,
} from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { MdMovieFilter } from "react-icons/md";
import { FaVideo, FaBullhorn } from "react-icons/fa";

const CreateMenu = () => {
  return (
    <section className="p-2 border border-gray-600 rounded-md bg-slate-800 text-gray-300 tracking-wide">
      <h2 className="text-gray-200 text-xl font-bold mb-2">Create</h2>

      {/* account */}
      <div className="mt-3 flex flex-col gap-1 pb-2 border-b border-gray-600">
        <SBI
          icon={<IoCreateOutline className="text-2xl" />}
          title={"Post"}
          desc={"Share a post on New Feed."}
        />
        <SBI
          icon={<BsBookFill className="text-2xl" />}
          title={"Story"}
          desc={"Share a photo or write something."}
        />
        <SBI
          icon={<MdMovieFilter className="text-2xl" />}
          title={"Reel"}
          desc={"Share a reel."}
        />
        <SBI
          icon={<FaVideo className="text-2xl" />}
          title={"Room"}
          desc={
            "Video chat with anyone, on or off facebook without time limits."
          }
        />
      </div>

      {/* for page */}
      <div className="mt-2 flex flex-col gap-1">
        <SBI
          icon={<BsFlagFill className="text-2xl" />}
          title={"Page"}
          desc={"Connect and share with customers or fans."}
        />
        <SBI
          icon={<FaBullhorn className="text-2xl" />}
          title={"Ad"}
          desc={"Advertise your business brand or organization."}
        />
        <SBI
          icon={<BsPeopleFill className="text-2xl" />}
          title={"Group"}
          desc={"Connect with people who share your interests."}
        />
        <SBI
          icon={<BsCalendar2EventFill className="text-2xl" />}
          title={"Event"}
          desc={"Bring people together with a public or private event."}
        />
      </div>
    </section>
  );
};

export default CreateMenu;
