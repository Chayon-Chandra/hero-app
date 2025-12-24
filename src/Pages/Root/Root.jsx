import React from "react";
import Navbar from "../../Componentes/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Componentes/Footer/Footer";
import { ToastContainer} from "react-toastify";
import PageLoader from "../../Componentes/PageLoader/PageLoader";

const Root = () => {
  const  navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      {navigation.state === "loading" && <PageLoader/>}
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
