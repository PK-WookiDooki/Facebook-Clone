import React from "react";
import { IBtn, PBtn, PCard, StoryCard } from "..";
import profile from "../../assets/images/profile.jpg";
import { stories } from "../../data.json";
import {
  BsArrowRight,
  BsFillCameraVideoFill,
  BsImages,
  BsEmojiSmile,
} from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { posts } from "../../data.json";

const HomeContent = () => {
  return (
    <section className="text-gray-200 w-full max-w-2xl">
      {/* stories cards */}
      <div className="flex items-center gap-2 lg:justify-center relative mb-5">
        <StoryCard image={profile} me={true} />
        {stories?.map((story) => {
          return (
            <StoryCard
              key={story.id}
              image={story.image}
              user={story.user}
              profile={story.profile}
            />
          );
        })}
        <div className="absolute transform top-1/2 right-5 md:right-3 translate-x-1/2 -translate-y-1/2">
          <IBtn
            icon={<BsArrowRight className="text-xl text-gray-300" />}
            hover={"hover"}
            tooltip={"See All"}
          />
        </div>
      </div>
      {/* create post */}
      <div className="p-3 bg-slate-800 rounded-md mb-5 mx-2">
        <div className="flex items-center gap-3 md:pb-3 md:border-b border-gray-600">
          <img
            src={profile}
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => alert("Hello")}
          />
          <button className=" h-10 w-full rounded-full bg-gray-600 bg-opacity-60 outline-none px-3 flex items-center hover:bg-opacity-100 duration-150 text-gray-400">
            What is on your mind?
          </button>
        </div>
        <div className=" hidden mt-3 md:flex items-center justify-between">
          <PBtn
            icon={<BsFillCameraVideoFill className="text-2xl text-red-700" />}
            title={"Live Video"}
          />
          <PBtn
            icon={<BsImages className="text-2xl text-green-600" />}
            title={"Photo/Video"}
          />
          <PBtn
            icon={<BsEmojiSmile className="text-2xl text-yellow-600" />}
            title={"Feeling/Activity"}
          />
        </div>
      </div>

      {/* room */}
      <div className="p-3 bg-slate-800 rounded-md mb-5 mx-2">
        <PBtn
          icon={<RiVideoAddFill className="text-2xl text-purple-600" />}
          title={"Feeling/Activity"}
          border={true}
          color={"blue"}
        />
      </div>

      {/* new feed */}
      <div className="flex flex-col gap-5">
        {posts.map((post, index) => {
          return <PCard key={index} post={post} />;
        })}
        {/* <PCard /> */}
      </div>
    </section>
  );
};

export default HomeContent;
