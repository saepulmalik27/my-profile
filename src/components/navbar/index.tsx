import React from "react";
import Link from "next/link";

const Navbar = () => {
  const lists = [
    { label: "about", url: "/about" },
    { label: "carreer", url: "/carreer" },
    { label: "blog", url: "/blog" },
    {
      label: "contact",
      url: "/contact",
    },
  ];

  return (
    <ul className="hidden gap-1 sm:gap-2  sm:flex">
      {lists.map((item, key) => {
        return (
          <li key={key} className="hover:bg-slate-800 hover:text-white  w-fit px-2 py-1 rounded" >
            <Link href={item.url} className={"capitalize"}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>

  );
};

export default Navbar;

