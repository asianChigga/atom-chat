import React, { useContext, useEffect, useState } from "react";
import styles from "./signin.module.scss";
import { FcGoogle } from "react-icons/fc";
import { FaHandshake } from "react-icons/fa";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import SignIn from "../../public/Sign.svg";
import { useRouter } from "next/router";
import { auth, provider } from "../../Firebase.util";
import { UserContext } from "../../context/Context";
import Image from "next/image";
import CustomButton from "../custombutton/CustomButton";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(UserContext);
  const [createUserWithEmailAndPassword, x, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      router.push("/chatapp");
    }
  }, [user]);
  const router = useRouter();
  const clickHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("signed in", user);
        if (user) router.push("/chatapp");

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    if (user) console.log(user);
  };
  return (
    <div className={styles.signIn__containerParent}>
      <div className={styles.signIn__container}>
        <div className={styles.signIn__imgContainer}>
          <Image src={SignIn}></Image>
        </div>
        <div className={styles.signIn__infoContainer}>
          <form onSubmit={submitHandler} className={styles.inputs}>
            <h1>Welcome Back</h1>
            <div className={styles.emailInput}>
              <label htmlFor="email">Email</label>
              <input onChange={emailHandler}></input>
            </div>
            <div className={styles.passwordInput}>
              <label htmlFor="password">Password</label>
              <input onChange={passwordHandler}></input>
            </div>
            <CustomButton type="signIn">Sign in</CustomButton>
          </form>
          <div className={styles.inputFooter} onClick={clickHandler}>
            <CustomButton type="footerBtn">
              <FcGoogle className={styles.googleImg} />
              <p>
                Don't have an account?
                <span className={styles.signUp}>Sign up</span>
              </p>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
