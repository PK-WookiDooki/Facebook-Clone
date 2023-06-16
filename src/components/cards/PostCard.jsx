import React from "react";
import { IBtn, PContent, PFooter, PHeader } from "..";

const PostCard = ({ post }) => {
  const {
    profile_image,
    name,
    postedTime,
    isFriend,
    desc,
    postedImages,
    likes,
    comments,
    shares,
    nationality,
    team,
    mutual,
    role,
  } = post;
  return (
    <section className="p-3 bg-slate-800 mx-2 rounded-md">
      {/* post header */}
      <PHeader
        image={profile_image}
        name={name}
        time={postedTime}
        isFriend={isFriend}
        mutual={mutual}
        nationality={nationality}
        team={team}
        role={role}
      />

      {/* post content/text */}
      <PContent desc={desc} images={postedImages} />

      {/* footer */}
      <PFooter likes={likes} comments={comments} shares={shares} />
    </section>
  );
};

export default PostCard;
