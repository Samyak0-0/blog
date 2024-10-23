import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="https://github.com/samyak0-0/" target="_blank">
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/samyak-maharjan-767909293/"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </a>
        <a href="mailto:samyakmhrzn9841@gmail.com" target="_blank">
          <Image src="/mail.png" alt="mail" width={24} height={24} />
        </a>
      </div>
      <Link href="/" className={styles.logo}>
        My Blog
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/#footer_" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
