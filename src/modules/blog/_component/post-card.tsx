import Image from "next/image";
import React, { useState } from "react";
import { TMediumPost } from "../core/model";
import defaultImage from "public/default_image_2.png";
import moment from "moment";
type TPostCard = {
  title: TMediumPost["title"];
  image: TMediumPost["thumbnail"];
  link: TMediumPost["link"];
  author: TMediumPost["author"];
  categories: TMediumPost["categories"];
  description: TMediumPost["description"];
  date: TMediumPost["pubDate"];
};

const PostCard: React.FC<TPostCard> = ({
  title,
  author,
  categories,
  description,
  link,
  date,
  image,
}) => {
  const [coverError, setCoverError] = useState(false);

  const sanitizeHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, "");
  };
  return (
    <div className="flex flex-col gap-2 w-full sm:w-auto max-w-[340px] cursor-pointer" onClick={() => {
        window.open(link, "_blank")
    }}>
      <Image
        src={coverError ? image : defaultImage}
        width="340"
        height={180}
        className=" rounded-md sm:rounded-xl overflow-hidden"
        alt="post-image"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.onerror = null;
          setCoverError(true);
        }}
      />

      <div className="flex gap-1 flex-wrap">
        {categories.map((item, key) => {
          return (
            <span
              key={key}
              className="bg-cyan-100 dark:bg-gray-600 p-1 capitalize rounded text-xs text-gray-700"
            >
              {item}
            </span>
          );
        })}
      </div>

      <div>
        <h3 className="text-lg font-bold capitalize line-clamp-1">{title}</h3>
        <p className="text-[11px] text-gray-500">
          <b>{author}</b> - {moment(date).format("DD-MM-YYYY hh:mm")}{" "}
        </p>
      </div>
      <article className="text-ellipsis line-clamp-3 text-gray-400 text-justify">
        {sanitizeHtml(description)}
      </article>
    </div>
  );
};

export default PostCard;
