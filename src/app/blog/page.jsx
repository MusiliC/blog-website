import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item, i) => (
        <Link href={`/blog/${item._id}`} className={styles.blogContainer} key={i}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={item.img}
              width={400}
              height={200}
              alt="image"
            />
          </div>

          {/* content */}
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
