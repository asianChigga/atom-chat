import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { DiAtom } from "react-icons/di";
import { useRouter } from "next/router";
import Link from "next/link";
import PopUp from "../popup/PopUp";
const Navbar = () => {
  const [isPopUp, setPopUp] = useState(false);
  const hamburgerClick = () => {
    setPopUp(!isPopUp);
    console.log(isPopUp);
  };
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.navbar__containerParent}>
      <div className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <DiAtom />
        </div>
        <ul className={styles.navbar__links}>
          {router.pathname == "/" ? (
            <li>contact</li>
          ) : (
            <Link href="/">
              <li>home</li>
            </Link>
          )}
          {router.pathname == "/signin" ? (
            <li>contact</li>
          ) : (
            <Link href="/signin">
              <li>sign in</li>
            </Link>
          )}
          <li>about</li>
        </ul>
        <div className={styles.hamburgerContainer}>
          <ul className={styles.navbar__hamburger} onClick={hamburgerClick}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          {isPopUp && <PopUp />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
