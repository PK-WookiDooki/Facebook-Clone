import React from "react";

const PostContent = ({ desc, images }) => {
  return (
    <section className="mt-3 overflow-hidden">
      <p>{desc}</p>
      <div className="flex gap-1 mt-2">
        {images.map((image, index) => {
          return (
            <div key={index + 1} className="">
              <img
                src={image}
                alt=""
                className="w-full max-h-64 object-contain rounded-md cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PostContent;
