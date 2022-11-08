import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./popoup.module.scss";
const PopUp = () => {
  const router = useRouter();
  return (
    <div className={styles.navPopUp__container}>
      <ul>
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
      </ul>
    </div>
  );
};

export default PopUp;
