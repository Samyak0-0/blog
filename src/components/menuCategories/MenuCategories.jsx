import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const getData = async () => {
  const res = await fetch("https://blog-app-nine-ecru.vercel.app/api/categories?cat_no=9", {
    cache: "no-store",
  });
  
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const MenuCategories = async () => {

  const data = await getData();

  return (
      <div className={styles.categoryList}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.categoryItem} ${styles[item.slug]}`}
            style={{backgroundColor: `rgba(${ Math.floor(Math.random()*256)},${ Math.floor(Math.random()*256)},${ Math.floor(Math.random()*256)},.25)`}}
            key={item._id}
          >
            {item.title}
          </Link>
        ))}
      </div>
  );
};

export default MenuCategories;