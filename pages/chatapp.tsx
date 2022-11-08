import React from "react";
import Chat from "../components/chat/Chat";
import { UserProvider } from "../context/Context";

const chatapp = () => {
  return (
    <UserProvider>
      <Chat />
    </UserProvider>
  );
};

export default chatapp;
