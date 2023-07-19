import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //next: { revalidate: 10} // It will revalidate the data in every 10 seconds
    cache: "no-store", //It will fresh data on every fetch request
  });

  //Handle Errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/3848420/pexels-photo-3848420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      ))};

    </div>
  );
};

export default Blog;
