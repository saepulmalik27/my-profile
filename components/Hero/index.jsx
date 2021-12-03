import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import cx from "classnames";

const Hero = () => {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.jumbotron_item}>
        <span className={cx(styles.title, 'h0')}>Saepul Malik</span>
        <p className="text-secondary p00"><b>Physics | IPB University 2017</b></p>
        <p className={'p00'} >Web Developer - FullStack Developer - Frontend Engineer</p> 
      </div>
      <div className={cx(styles.jumbotron_item, styles.jumbotron_illu)}>
        <Image src="/Saepul-Malik.png" width="400" height="400" />
      </div>
    </div>
  );
};

export default Hero;
