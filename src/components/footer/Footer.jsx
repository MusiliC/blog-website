import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Musili. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" className={styles.icon} width={15} height={15} alt="Musili" />
        <Image src="/2.png" className={styles.icon} width={15} height={15} alt="Musili" />
        <Image src="/3.png" className={styles.icon} width={15} height={15} alt="Musili" />
        <Image src="/4.png" className={styles.icon} width={15} height={15} alt="Musili" />
         
      </div>
    </div>
  );
};

export default Footer;
