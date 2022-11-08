import React from "react";
import styles from "./customButton.module.scss";
const CustomButton = ({ children, type, onClick }: any) => {
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
