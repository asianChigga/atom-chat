import React from "react";
import styles from "./landingPage.module.scss";
import Image from "next/image";
import Hero from "../../public/Hero.svg";
import { useRouter } from "next/router";
import CustomButton from "../custombutton/CustomButton";
const LandingPage = () => {
  const navigate = useRouter();
  const clickHandler = () => {
    navigate.push("/signin");
  };
  return (
    <div className={styles.hero__containerParent}>
      <div className={styles.hero__container}>
        <div className={styles.hero__containerImage}>
          <Image src={Hero}></Image>
        </div>
        <div className={styles.hero__containerInfo}>
          <h1>Atom Messenger</h1>
          <p>
            Instant and stable communication with clients through messengers
            with adaptation for business and CRM
          </p>
          <CustomButton onClick={clickHandler} type="getStarted">
            Get Started
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
