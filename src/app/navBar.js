"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles/navbar.module.css";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  // const { asPath, pathname} = useRouter();
  // console.log(asPath); // '/blog/xyz'
  // console.log(pathname); // '/blog/[slug]'
  // router.pathname
  // router.asPath -> include the url query parameters

  const [scrollTop, setScrollTop] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(true);

  // When a page is loaded, reset the window scroll
  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleMenu(true);
  }, [pathname]);

  // Read window scroll
  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle Toggling Menu
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  // Handle NavBar Styles by status
  const handleNavBarStyle = () => {
    let result = "";
    result =
      scrollTop > 25
        ? `${styles.navbar} ${styles.smallNavbar}`
        : `${styles.navbar}`;

    result += !toggleMenu ? `  ${styles.open}` : ``;

    return result;
  };

  const iconPixel = 40;
  const navBurger = (
    <>
      <button
        type="button"
        className={styles.navbarBurger}
        onClick={handleToggleMenu}
      >
        {toggleMenu ? (
          <span className={styles.materialIcons}>
            <Image
              className={styles.navbarBurgerImg}
              src="/Icons/google_icon_menu.svg"
              alt="menu"
              width={iconPixel}
              height={iconPixel}
            />
          </span>
        ) : (
          <span className={styles.materialIcons}>
            <Image
              className={styles.navbarBurgerImg}
              src="/Icons/google_icon_close.svg"
              alt="close"
              width={iconPixel}
              height={iconPixel}
            />
          </span>
        )}
      </button>
    </>
  );

  const navItems = (
    <>
      <nav>
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
            <a
              target="_blank"
              href="https://kohwys.com/"
              className={styles.blog}
            >
              Blog
            </a>
          </li>
          {/* <li className={pathname == "/shop" ? `${styles.active}` : ""}>
          <Link href="/shop">Shop</Link>
        </li> */}
        </ul>
      </nav>
    </>
  );

  return (
    <nav className={handleNavBarStyle()}>
      {navItems}
      {navBurger}
    </nav>
  );
}
