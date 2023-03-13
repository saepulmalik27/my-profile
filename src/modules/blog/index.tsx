import Image from "next/image";
import React, { useState } from "react";
import { TMediumPost } from "./core/model";
import useBlog from "./useBlog";
import PostCard from "./_component/post-card";
import defaultImage from "public/default_image_2.png";
import moment from "moment";

const BlogPage = () => {
  const { data, isError, isLoading } = useBlog();
  const [coverError, setCoverError] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const sanitizeHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  return (
    <div className="flex gap-5 flex-col py-10 px-4">

      <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600">
        List Artikel
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-3 gap-5 ">
        {data.items.map((item: TMediumPost, key: number) => {
          return (
            <PostCard
              key={key}
              author={item.author}
              categories={item.categories}
              description={item.description}
              link={item.link}
              image={item.thumbnail}
              title={item.title}
              date={item.pubDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
