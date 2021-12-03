import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";

const Navbar = () => {
  const lists = [
    { behavior: "_blank", label: "services", url: "/blog" },
    { behavior: null, label: "Portofolio", url: "#portofolio" },
    { behavior: "_blank", label: "blog", url: "/blog" },
  ];

  const renderList = () => {
    return lists.map((item, key) => {
      return (
        <li className={styles.navbar_item} key={key}>
          <Link href={item.url}>
            <a className={styles.navbar_link} target={item.behavior || null}>
              {item.label}
            </a>
          </Link>
        </li>
      );
    });
  };

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <Image src={"/logo.png"} width="35" height="35" />
       
      </div>
      <ul className={styles.navbar}>
          {renderList()}
      </ul>
    </nav>
  );
};

export default Navbar;
