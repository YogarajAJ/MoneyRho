import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import LoaderComponent from "../../atoms/LoaderComponent";
import ToastMessage from "../../atoms/ToastMessage";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ headerVariant }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header variant={headerVariant} />
      <div style={{ marginTop: "20vh" }}>
        <Outlet />
      </div>
      <LoaderComponent />
      <ToastMessage />
      {/* <CustomCursor /> */}
      <Footer />
    </>
  );
}
