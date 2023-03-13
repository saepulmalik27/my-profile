import React from "react";
import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";
const Navbar = () => {
  const lists = [
    { label: "about", url: "/about" },
    { label: "Pengalaman Kerja", url: "/carreer" },
    { label: "blog", url: "/blog" },
  ];

  const router = useRouter();
  const path = router.asPath; 

  return (
    <ul className="hidden gap-1 sm:gap-2  sm:flex">
      {lists.map((item, key) => {
        return (
          <li key={key} className={cx("hover:bg-slate-800 hover:text-white dark:hover:bg-cyan-800  w-fit px-2 py-1 rounded", path === item.url ?  "bg-cyan-400" : null )} >
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

