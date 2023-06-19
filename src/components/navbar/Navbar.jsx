import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsSearch,
  BsPlusLg,
  BsMessenger,
  BsBellFill,
  BsArrowLeft,
} from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { HiUserGroup, HiHome } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";

import { AMenu, CMenu, IBtn, ILink, LMenu, NMenu } from "..";
import profile from "../../assets/images/profile.jpg";

const Navbar = () => {
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState(false);

  const [accMenu, setAccMenu] = useState(false);
  const [notiMenu, setNotiMenu] = useState(false);
  const [createMenu, setCreateMenu] = useState(false);
  const [largeMenu, setLargeMenu] = useState(false);

  const handleFocus = () => {
    setFocus(!focus);
    setActive(!active);
  };

  const handleAccMenu = () => {
    setAccMenu(!accMenu);
    setNotiMenu(false);
    setCreateMenu(false);
    setLargeMenu(false);
  };

  const handleNotiMenu = () => {
    setNotiMenu(!notiMenu);
    setAccMenu(false);
    setCreateMenu(false);
    setLargeMenu(false);
  };

  const handleCreateMenu = () => {
    setCreateMenu(!createMenu);
    setAccMenu(false);
    setNotiMenu(false);
    setLargeMenu(false);
  };

  const handleLargeMenu = () => {
    setLargeMenu(!largeMenu);
    setAccMenu(false);
    setNotiMenu(false);
    setCreateMenu(false);
  };

  return (
    <section className="sticky top-0 bg-gray-800 shadow border-b border-gray-600 z-20">
      <div className="mx-auto ">
        <nav className=" h-16 flex items-center justify-between relative">
          {/* logo an search box */}
          <div
            className={`border-b border-r  ${
              active
                ? "absolute lg:relative bg-gray-900 py-3 z-10 h-40 rounded-br-md border-gray-700 mr-auto"
                : "relative border-transparent"
            }  flex items-center gap-2  px-5 w-fit`}
          >
            {focus ? (
              <div className="rounded-full" onClick={handleFocus}>
                <IBtn
                  icon={
                    <BsArrowLeft
                      className="text-xl
                "
                    />
                  }
                />
              </div>
            ) : (
              <Link to={"/"} className="w-10 h-10 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
                  alt="Facebook Logo"
                />
              </Link>
            )}
            <div
              className={`${active ? "hidden" : "block lg:hidden"}`}
              onClick={handleFocus}
            >
              <IBtn icon={<BsSearch />} hidden={true} />
            </div>

            <div
              className={` h-10 w-64 ${
                active ? "flex" : "hidden lg:flex"
              } rounded-full lg:flex items-center justify-center bg-gray-700 px-3 overflow-hidden z-[5]`}
            >
              <div
                className={`${active ? "hidden" : "block"}`}
                onClick={handleFocus}
              >
                <BsSearch
                  className={`${
                    focus ? " -translate-x-20 w-0" : " translate-x-0"
                  } text-white text-lg duration-200`}
                />
              </div>
              <input
                type="text"
                placeholder="Search Facebook"
                className={` ${
                  focus ? "w-64 px-1" : "w-[216px] ms-2"
                } bg-transparent h-full outline-none placeholder:text-sm caret-white duration-200 text-gray-300 `}
                onFocus={() => {
                  setActive(true);
                  setFocus(true);
                }}
              />
            </div>

            <p
              className={` text-gray-300 text-center ${
                active ? "block absolute bottom-5" : "hidden"
              }  w-full`}
            >
              No Recent Search
            </p>
          </div>

          {/* main icons link */}
          <div className="hidden md:flex items-center gap-3 mx-auto w-full justify-center">
            <ILink
              icon={<HiHome />}
              path={"/"}
              tooltip={"Home"}
              className="pointer-events-none"
            />
            <ILink
              icon={<HiUserGroup />}
              path={"/group"}
              tooltip={"Group"}
              className="pointer-events-none"
            />
            <ILink
              icon={<IoGameController />}
              path={"/gaming"}
              tooltip={"Gaming"}
              className="pointer-events-none"
            />
            <div className="lg:hidden">
              <ILink
                icon={<TfiMenu />}
                path={"/more"}
                tooltip={"More"}
                className="pointer-events-none"
              />
            </div>
          </div>

          {/* right side icons group */}
          <div className="ms-auto flex items-center gap-2 pr-5 w-full justify-end md:w-[30%]">
            {/* large menu */}
            <div className=" rounded-full relative -me-2">
              <div
                onClick={handleLargeMenu}
                className="hidden lg:block rounded-full"
              >
                <IBtn
                  icon={<CgMenuGridO className="text-3xl" />}
                  hover={"hover"}
                  tooltip={"Menu"}
                  className="pointer-events-none"
                />
              </div>
              <div
                className={` ${
                  largeMenu ? "md:block hidden" : "hidden"
                } fixed right-3 top-14 min-w-[500px] max-w-[500px]`}
              >
                <LMenu />
              </div>
            </div>

            {/* create icon */}
            <div className=" rounded-full relative">
              <div onClick={handleCreateMenu} className="">
                <IBtn
                  icon={<BsPlusLg className="text-2xl" />}
                  hover={"hover"}
                  hidden={true}
                  tooltip={"Create"}
                  className="pointer-events-none"
                />
              </div>
              <div
                className={` ${
                  createMenu ? "block lg:hidden" : "hidden"
                } fixed right-3 top-14 min-w-[350px] max-w-[350px]`}
              >
                <CMenu />
              </div>
            </div>

            <IBtn
              icon={<BsMessenger />}
              hover={"hover"}
              tooltip={"Messenger"}
              noti={9}
              className="pointer-events-none"
            />

            {/* notification icon */}
            <div className=" rounded-full relative">
              <div onClick={handleNotiMenu} className="">
                <IBtn
                  icon={<BsBellFill />}
                  hover={"hover"}
                  tooltip={"Notifications"}
                  noti={15}
                  className="pointer-events-none"
                />
              </div>
              <div
                className={` ${
                  notiMenu ? "block" : "hidden"
                } fixed z-[2] right-3 top-14 min-w-[350px] max-w-[350px] `}
              >
                <NMenu />
              </div>
            </div>

            {/* profile */}
            <div className=" rounded-full relative">
              <div onClick={handleAccMenu} className="">
                <IBtn
                  image={profile}
                  hover={"hover"}
                  tooltip={"Account"}
                  className="pointer-events-none"
                />
              </div>
              <div
                className={` ${
                  accMenu ? "block" : "hidden"
                } fixed right-3 top-14 min-w-[350px] max-w-[350px]`}
              >
                <AMenu />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
