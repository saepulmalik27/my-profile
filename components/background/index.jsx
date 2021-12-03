import React from "react";
import styles from "./style.module.scss";

const HeaderBackground = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_bg}>
        <div className={styles.container_fg}></div>
      </div>
    </div>
  );
};

export default HeaderBackground;
