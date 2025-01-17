import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "./store/authStore";
import AppRoutes from "./AppRoutes/AppRoutes";
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";

function App() {
  const { userRoles } = useAuthStore();
  const location = useLocation();

  const shouldShowHeaderFooter =
    !["/login", "/register"].includes(location.pathname) &&
    !location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen bg-stone-900">
      <ToastContainer />
      {shouldShowHeaderFooter && !userRoles.includes("Administrator") && (
        <Header />
      )}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {shouldShowHeaderFooter && !userRoles.includes("Administrator") && (
        <Footer />
      )}
    </div>
  );
}

export default App;
