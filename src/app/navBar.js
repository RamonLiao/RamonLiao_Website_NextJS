"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles/navbar.module.css";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
      // console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const { asPath, pathname} = useRouter();
  // console.log(asPath); // '/blog/xyz'
  // console.log(pathname); // '/blog/[slug]'
  // router.pathname
  // router.asPath -> include the url query parameters

  return (
    <nav
      className={
        scrollTop > 25 ? `${styles.nav} ${styles.smallNav}` : `${styles.nav}`
      }
    >
      {/* <>Current pathname: {pathname}</> */}
      <ul>
        <li className={pathname == "/" ? `${styles.active}` : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname == "/about" ? `${styles.active}` : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname == "/projects" ? `${styles.active}` : ""}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={pathname == "/contact" ? `${styles.active}` : ""}>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <a target="_blank" href="https://kohwys.com/" className={styles.blog}>
            Blog
          </a>
        </li>
        {/* <li className={pathname == "/shop" ? `${styles.active}` : ""}>
          <Link href="/shop">Shop</Link>
        </li> */}
      </ul>
    </nav>
  );
}
