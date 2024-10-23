import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container} id='footer_'>
      <div className={styles.info}>
        <div className={styles.logo}>
          <div className={styles.profile_cont}>
            <Image src="/profile.jpg" alt="profile pic" fill objectFit='cover'/>
          </div>
          <h1 className={styles.logoText}>Samyak</h1>
        </div>
        <p className={styles.desc}>
          A passionate learner / computer engineer / student / web developer <br/>
          Copyright © 2023 Samyak. All Rights Reserved.
        </p>
        <div className={styles.icons}>
        <a href="https://github.com/samyak0-0/" target="_blank">
          <FaGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/samyak-maharjan-767909293/"
          target="_blank"
        >
          <FaLinkedin size={18} />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <Image src="/youtube.png" alt="youtube" width={18} height={18} />
        </a>
        <a href="mailto:samyakmhrzn9841@gmail.com" target="_blank">
          <Image src="/mail.png" alt="mail" width={18} height={18} />
        </a>
        </div>
      </div>
      
    </div>
  )
}

export default Footer