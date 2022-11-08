import React from "react";
import styles from "./navbar.module.scss";
import { DiAtom } from "react-icons/di";
import { useRouter } from "next/router";
import Link from "next/link";
const Navbar = () => {
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
          {router.pathname == "/signin" ? <li>contact</li> : <li>sign in</li>}
          <li>about</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
