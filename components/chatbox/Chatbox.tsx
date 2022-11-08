import Image from "next/image";
import React from "react";
import { UserContext } from "../../context/Context";
import styles from "./chatbox.module.scss";
interface PROPS {
  msgs: string;
  user: string;
  photo: any;
}

const Chatbox: React.FC<PROPS> = ({ msgs, user, photo }) => {
  return (
    <div className={styles.chatbox__container}>
      <div className={styles.logo__container}>
        <div className={styles.logo}>
          <Image src={photo} height={"50px"} width={"50px"}></Image>
        </div>
      </div>
      <div className={styles.data__container}>
        <h2>{user}</h2>
        <p>{msgs}</p>
      </div>
    </div>
  );
};

export default Chatbox;
