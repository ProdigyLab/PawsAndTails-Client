"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ReactNode, useCallback, useState, use, useEffect } from "react";
import { ConfigProvider, Spin, theme } from "antd";
import { ThemeProvider, useTheme } from "@/components/ui/theme";
import NavBarComponent from "@/components/ui/features/Navbar";
import PetLoader from "@/components/ui/elements/Loader";
import { SessionProvider } from "next-auth/react";
import FooterComponent from "@/components/ui/features/Footer";
import { LoadingOutlined } from "@ant-design/icons";
const { darkAlgorithm, defaultAlgorithm } = theme;

interface LayoutProps {
  children: ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" && !isDarkMode) {
      toggleTheme(); // Set dark mode if stored and not already active
    }
  }, [isDarkMode, toggleTheme]);

  useEffect(() => {
    // Simulate loading process and set loading state to false
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust duration as necessary

    return () => clearTimeout(loadingTimer); // Cleanup timer on unmount
  }, []);

  // Call finishLoading immediately
  // finishLoading();
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: "#1890ff",
        },
      }}
    >
      <Provider store={store}>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <Spin
              tip="Loading..."
              indicator={<LoadingOutlined spin />}
              size="large"
              spinning={isLoading}
            ></Spin>
          </div>
        ) : (
          <>
            <NavBarComponent />
            {children}
            <FooterComponent />
          </>
        )}
      </Provider>
    </ConfigProvider>
  );
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider>
            <LayoutContent>{children}</LayoutContent>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
