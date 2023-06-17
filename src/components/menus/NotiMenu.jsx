import React from "react";
import { IBtn, SBI, PBtn, Title, NBtn } from "..";
import { BsThreeDots } from "react-icons/bs";
import { notis } from "../../data.json";

const NotiMenu = () => {
  return (
    <section className="p-3 border border-gray-600 rounded-md bg-slate-900 text-gray-300 tracking-wide max-h-[90vh] overflow-y-scroll ">
      {/* noti header */}
      <div className=" flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-200 text-xl font-bold">Notifications</h2>
          <IBtn
            icon={<BsThreeDots className="text-sm" />}
            sm={true}
            tooltip={"Options"}
          />
        </div>

        <div className="flex items-center gap-3">
          <PBtn title={"All"} border={true} color={"blue"} rounded={true} />
          <PBtn title={"Unread"} rounded={true} />
        </div>
      </div>

      {/* new noti */}
      <div className="mt-2">
        <div className=" flex items-center justify-between">
          <Title title={"New"} menu={true} />
          <PBtn title={"See all"} color={"blue"} fw={"light"} />
        </div>
        <NBtn
          image={
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
          timeAgo={" 2 hours "}
          desc={"You have memories to look back on today."}
          isNew={true}
          fw={"base"}
        />
      </div>

      {/* earlier noti */}
      <div className="mt-2">
        <Title title={"Earlier"} menu={true} />

        <div className="">
          {notis.map((noti) => {
            return (
              <NBtn
                key={noti.id}
                image={noti.image}
                timeAgo={noti.timeAgo}
                desc={noti.desc}
                isNew={noti.isNew}
                fw={"base"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NotiMenu;
