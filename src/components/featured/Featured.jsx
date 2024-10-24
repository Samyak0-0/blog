import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Samyak here!</b> Discover my stories and share your own unique ideas!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer} style={{border: "2px solid var(--textColor)", borderRadius: "12px"}}>
          <Image src="/blog.PNG" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Some Information & Status about the site!!
          </h1>
          <p className={styles.postDesc}>
            This is a blog developed by using Next JS. <br/>
            You can Login into your own google accounts to share you own posts and comment on others&apos; posts.<br/>
            Some functionalities of this blog are still yet to be developed such as . . . 
          </p>
          <Link href={`/posts/some-information-status-about-the-site`}>
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
