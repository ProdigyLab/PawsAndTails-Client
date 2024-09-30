"use client";
import React, { useEffect } from "react";
import LoginComponent from "@/components/auth/login/loginComponent";
import { useSession } from "next-auth/react";
import { useTheme } from "@/components/ui/theme";
const LoginPage = () => {
  const { data: session } = useSession();
  const { isDarkMode } = useTheme();
  useEffect(() => {
    if (session?.user?.email) {
      // navigate to home page
      window.location.href = "/privateRoute"; // replace with your home page path
    } else {
      // display login page
      console.log("User is not logged in, displaying login page"); // replace with your login page component
    }
  }, [session?.user]);
  return (
    <div className={` min-h-screen bg-slate-200 w-full mx-auto p-10 ${isDarkMode ? "bg-slate-900" : "bg-gray-100"}` }>
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
