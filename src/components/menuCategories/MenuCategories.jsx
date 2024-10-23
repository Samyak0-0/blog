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

  // const colorr = `$`;

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

// const MenuCategories = () => {
//   return (
//     <div className={styles.categoryList}>
//       <Link
//         href="/blog?cat=style"
//         className={`${styles.categoryItem} ${styles.style}`}
//       >
//         Style
//       </Link>
//       <Link href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>
//         Fashion
//       </Link>
//       <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>
//         Food
//       </Link>
//       <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>
//         Travel
//       </Link>
//       <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>
//         Culture
//       </Link>
//       <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
//         Coding
//       </Link>
//     </div>
//   );
// };

export default MenuCategories;