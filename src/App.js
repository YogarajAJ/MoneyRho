import React from "react";
import LoaderComponent from "./atoms/LoaderComponent";
import ToastMessage from "./atoms/ToastMessage";
import Navbar from "./organisms/Navbar";
import NavRoutes from "./organisms/NavRoutes";

import "./assets/MontserratFont_wght.ttf";
const App = () => {
  return (
    <div className="App">
      <ToastMessage />
      <LoaderComponent />
      <Navbar />
      <NavRoutes />
    </div>
  );
};

export default App;
