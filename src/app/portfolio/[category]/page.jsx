import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item, i) => (
        <div className={styles.item} key={i}>
          {/*  */}
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="see more" url="#" />
          </div>

          {/* image */}
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={item.image}
              fill={true}
              alt="image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
