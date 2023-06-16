import React from "react";
import { SBI } from "..";
import {
  BsGearFill,
  BsFillQuestionCircleFill,
  BsFillMoonFill,
} from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import profile from "../../assets/images/profile.jpg";

const AccountMenu = () => {
  return (
    <section className="p-3 border border-gray-600 rounded-md bg-slate-800 text-gray-300 tracking-wide">
      <h2 className="text-gray-400 text-center mb-2">Account Menu</h2>

      {/* account */}
      <div className="p-2 shadow-md rounded-md border border-slate-700">
        <SBI image={profile} title={"Wooki Dooki"} path={"/account"} />
        <div className="mt-2 pt-2 border-t border-gray-600">
          <SBI noti={2} title={"See all profiles"} tsm={true} color={"blue"} />
        </div>
      </div>

      {/* settings */}
      <div className="mt-3 flex flex-col">
        <SBI
          icon={<BsGearFill className="text-2xl" />}
          title={"Settings & privacy"}
        />
        <SBI
          icon={<BsFillQuestionCircleFill className="text-2xl" />}
          title={"Help & support"}
        />
        <SBI
          icon={<BsFillMoonFill className="text-2xl" />}
          title={"Display & accessibility"}
        />
        <SBI
          icon={<MdFeedback className="text-2xl" />}
          title={"Give feedback"}
        />
        <SBI icon={<IoLogOut className="text-2xl" />} title={"Log out"} />

        <div className="text-sm text-gray-400 mt-2">
          <p> Privacy · Terms · Advertising · Ad Choices · Cookies ·</p>
          <p>More · Meta © 2023 </p>
        </div>
      </div>
    </section>
  );
};

export default AccountMenu;
