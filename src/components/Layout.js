import React from "react";
import Header from "./Header";
import Section7 from "./Section7";
import userImg from "../assets/user1.png";
import Section2 from "./Section2";

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Section7 />
    </>
  );
}

export default Layout;
