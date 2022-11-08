import type { NextPage } from "next";
import { useState } from "react";
import LandingPage from "../components/landingpage/LandingPage";
import Sign from "../components/signin/Sign";
import { UserProvider } from "../context/Context";
import Layout from "../lib/layout/layout";
import Email from "./Emai";
import Signin from "./signin";

const Home: NextPage = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};

export default Home;
