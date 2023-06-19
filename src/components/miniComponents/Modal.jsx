import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {
  BsEmojiSmile,
  BsImages,
  BsEmojiLaughing,
} from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillFlag } from "react-icons/ai";
import { HiOutlineGif } from "react-icons/hi2";
import { IBtn} from "..";
import profile from "../../assets/images/profile.jpg";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [text, setText] = useState("");
  const [isNull, setIsNull] = useState(true);

  useEffect(() => {
    if (text.trim().length > 0) {
      setIsNull(false);
    } else {
      setIsNull(true);
    }
  }, [text]);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = () => {
    setModal(!modal);
    setText("");
    alert("Thanks a lot for view my work!");
  };

  return (
    <section className="w-full">
      <button
        onClick={handleModal}
        className=" h-10 w-full rounded-full bg-gray-600 bg-opacity-60 outline-none px-3 flex items-center hover:bg-opacity-100 duration-150 text-gray-400"
      >
        What is on your mind?
      </button>
      <div
        className={` ${
          modal ? "flex" : "hidden"
        } fixed top-0 left-0 bg-black bg-opacity-70 w-full h-screen z-10 items-center justify-center duration-100`}
      >
        <div className=" w-[85%] md:w-[35%] p-3 bg-slate-800 rounded-md ">
          {/* header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-600">
            <h2 className="text-xl font-semibold">Create Post</h2>
            <IBtn
              icon={<RxCross1 className="text-lg" />}
              hover={"hover"}
              border={true}
              toggle={handleModal}
            />
          </div>

          {/* body */}
          <div className="mt-3">
            {/* acc setting */}
            <div className=" flex items-center gap-2 ">
              <IBtn image={profile} />
              <div className="">
                <h2 className="font-semibold mb-1">Wooki Dooki</h2>
                <select
                  name="privacy"
                  id=""
                  className=" outline-none bg-slate-700 rounded-md p-1 cursor-pointer text-sm border-0"
                >
                  <option value="Public">Public</option>
                  <option value="Friends">Friends</option>
                  <option value="Only me">Only me</option>
                </select>
              </div>
            </div>
            {/* textarea */}
            <div className="mt-3">
              <textarea
                rows="5"
                className=" outline-none bg-transparent border-transparent text-xl w-full text-white"
                placeholder="What's on your mind?"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <div className=" flex justify-between  items-center mt-2">
                <div className=" w-10 h-10 rounded-md border-2 border-white bg-gradient-to-br from-orange-600 to-green-500 flex items-center justify-center font-semibold cursor-pointer ">
                  <span>Aa</span>
                </div>
                <IBtn
                  icon={<BsEmojiSmile />}
                  border={false}
                  tooltip={"Emoji"}
                  top={true}
                />
              </div>
            </div>
            {/* other menu */}
            <div className="p-3 border border-gray-600 rounded-md flex gap-2 items-center mt-5 md:justify-between justify-center">
              <p className="cursor-pointer text-gray-300 hidden md:block">
                Add to your post
              </p>
              <div className="flex items-center gap-1 min-w-max">
                <IBtn
                  icon={<BsImages className="text-green-500 text-xl" />}
                  sm={true}
                  hover={"hover"}
                  top={true}
                  tooltip={"Photo/Video"}
                />
                <IBtn
                  icon={<FaUserTag className="text-blue-500 text-xl" />}
                  sm={true}
                  hover={"hover"}
                  top={true}
                  tooltip={"Tag People"}
                />
                <IBtn
                  icon={<BsEmojiLaughing className="text-yellow-500 text-xl" />}
                  sm={true}
                  hover={"hover"}
                  top={true}
                  tooltip={"Feeling/activity"}
                />
                <IBtn
                  icon={<IoLocationSharp className="text-red-600 text-xl" />}
                  sm={true}
                  hover={"hover"}
                  top={true}
                  tooltip={"Check in"}
                />
                <IBtn
                  icon={<AiFillFlag className="text-sky-500 text-xl" />}
                  sm={true}
                  hover={"hover"}
                  top={true}
                  tooltip={"Life event"}
                />
                <IBtn
                  icon={<HiOutlineGif className=" text-purple-500 text-xl" />}
                  sm={true}
                  hover={"hover"}
                  top={true}
                  tooltip={"GIF"}
                />
              </div>
            </div>
            {/* submit button */}
            <div className=" mt-3">
              <button
                onClick={handleSubmit}
                className={`w-full h-10 rounded-md ${
                  isNull
                    ? " bg-gray-600 text-gray-400"
                    : " bg-blue-500 text-white"
                }`}
                disabled={isNull && true}
              >
                {" "}
                Post{" "}
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
