import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {/*  */}
        <Image
          src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="about"
          className={styles.img}
        />

        {/*  */}
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning experience
          </h2>
        </div>
      </div>

      {/*  */}
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            iure odio pariatur, quas consequatur at similique distinctio
            recusandae eum sequi corrupti in culpa expedita odit ipsum veritatis
            fugit? Magnam, facere cupiditate. Sint nesciunt doloremque at Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. <br /> <br />
            Consequatur molestiae iste unde eveniet ipsa aspernatur, laborum
            quia veniam! Quidem, enim? officia facere voluptas, quasi mollitia
            repellat corrupti ut explicabo optio ad est! Dicta, voluptas
            cupiditate.
          </p>
        </div>

        {/*  */}
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            maxime velit laborum quam deserunt repudiandae fugit, ab optio
            repellat magnam!
            <br /> <br />
            - dyanamic website
            <br /> <br />
            - Fast and Handy
            <br /> <br />
            - Mobile Apps

          </p>

          {/*  */}
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
