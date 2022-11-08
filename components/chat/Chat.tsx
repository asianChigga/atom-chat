import {
  addDoc,
  collection,
  doc,
  DocumentData,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

import Chatbox from "../chatbox/Chatbox";
import styles from "./chat.module.scss";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { auth, db } from "../../Firebase.util";
import { UserContext } from "../../context/Context";
import { useRouter } from "next/router";
const Chat = () => {
  const [msg, setMsg]: any = useState("");
  const { user } = React.useContext(UserContext);
  const [messages, loading, error, snapshot] = useCollectionData(
    query(collection(db, "messages"), orderBy("createdAt"))
  );
  const router = useRouter();
  useEffect(() => {
    console.log(messages);
    console.log(user);
  }, [messages]);
  const [sentmsg, setSentMsg]: any = useState([]);
  const submitHandler = async (e: any) => {
    e.preventDefault();

    await addDoc(collection(db, "messages"), {
      msg: msg,
      user: user?.displayName,
      photo: user?.photoURL,
      createdAt: new Date(),
    });
    console.log(sentmsg);
    setMsg("");
  };
  const signOutHandler = () => {
    signOut(auth);
    router.push("/");
  };
  const changeHandler = (e: any) => {
    setMsg(e.target.value);
    console.log(user);
  };
  return (
    <div className={styles.chatMain__container}>
      <div className={styles.chatSideBar__container}>
        {/* <div className={styles.friends__container}>
          {friends.map((friend) => (
            <div className={styles.friend__container}>{friend}</div>
          ))}
        </div> */}
        <div className={styles.groups__container}>
          <button onClick={signOutHandler}>sign out</button>
        </div>
      </div>
      <div className={styles.chat__container}>
        <div className={styles.chats}>
          {messages?.map((data, idx: any) => (
            <Chatbox
              key={idx}
              msgs={data.msg}
              user={data.user}
              photo={data.photo}
            />
          ))}
        </div>
        <div className={styles.input__container}>
          <form className={styles.inputs} onSubmit={submitHandler}>
            <input
              className={styles.inputT}
              onChange={changeHandler}
              placeholder="Type something...."
              value={msg}
            ></input>
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
