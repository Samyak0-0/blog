

import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        <Image src="/mail.png" alt="mail" width={24} height={24} />
      </div>
      <Link href="/" className={styles.logo}>My Blog</Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/#footer_" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
