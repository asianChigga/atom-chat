import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./layout.module.scss";
interface PROPS {
  children: React.ReactNode;
}
const Layout: React.FC<PROPS> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
