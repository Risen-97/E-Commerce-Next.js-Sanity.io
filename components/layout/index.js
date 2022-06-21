import React from "react";
import CartBar from "../cart/CartBar";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <CartBar />
      <Footer />
    </>
  );
};

export default Layout;
