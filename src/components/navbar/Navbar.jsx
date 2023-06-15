import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsSearch,
  BsPlusLg,
  BsMessenger,
  BsBellFill,
  BsPersonCircle,
  BsArrowLeft,
} from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { HiUserGroup, HiHome } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { IBtn, ILink } from "..";

const Navbar = () => {
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setFocus(!focus);
    setActive(!active);
  };

  return (
    <section className="bg-gray-800 shadow sticky top-0 border-b border-gray-600">
      <div className="mx-auto ">
        <nav className=" h-16 flex items-center justify-between relative">
          <div
            className={`border-b border-r  ${
              active
                ? "absolute lg:relative bg-gray-900 bg-opacity-80 py-3 z-[5] h-40 rounded-br-md border-gray-700 mr-auto"
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
                <BsFacebook className="w-full h-full text-blue-600 bg-white rounded-full" />
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
                lassName={`${active ? "hidden" : "block lg:hidden"}`}
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
                  focus ? "w-64" : "w-[216px] ms-2"
                } bg-transparent h-full outline-none placeholder:text-sm caret-white duration-200 `}
                onFocus={handleFocus}
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

          <div className="ms-auto flex items-center gap-2 pr-5 w-full justify-end md:w-[30%]">
            <div className="hidden lg:block">
              <IBtn
                icon={<CgMenuGridO className="text-3xl" />}
                hover={"hover"}
                tooltip={"Menu"}
                className="pointer-events-none"
              />
            </div>
            <IBtn
              icon={<BsPlusLg className="text-2xl" />}
              hover={"hover"}
              hidden={true}
              tooltip={"Create"}
              className="pointer-events-none"
            />
            <IBtn
              icon={<BsMessenger />}
              hover={"hover"}
              tooltip={"Messenger"}
              noti={9}
              className="pointer-events-none"
            />
            <IBtn
              icon={<BsBellFill />}
              hover={"hover"}
              tooltip={"Notifications"}
              noti={15}
              className="pointer-events-none"
            />
            <IBtn
              icon={<BsPersonCircle />}
              hover={"hover"}
              tooltip={"Account"}
              className="pointer-events-none"
            />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
