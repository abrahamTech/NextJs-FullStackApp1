import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wordColor}>
        ©2023 abrahamTech. All rights reserved.
      </div>
      <div className={styles.social}>
        <Image src="/1.png" width={20} height={20} className={styles.icon} alt="User Facebook" />
        <Image src="/2.png" width={20} height={20} className={styles.icon} alt="User Instagram" />
        <Image src="/3.png" width={20} height={20} className={styles.icon} alt="User Twitter" />
        <Image src="/4.png" width={20} height={20} className={styles.icon} alt="User Youtube" />
      </div>
    </div>
  );
};

export default Footer;
