"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ReactNode, useCallback, useState, use } from "react";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider, useTheme } from "@/components/ui/theme";
import NavBarComponent from "@/components/ui/features/Navbar";
import PetLoader from "@/components/ui/elements/Loader";

const { darkAlgorithm, defaultAlgorithm } = theme;

interface LayoutProps {
  children: ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  
  const finishLoading = useCallback(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Call finishLoading immediately
  finishLoading();
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
          <PetLoader isLoading={isLoading} />
        ) : (
          <>
            <NavBarComponent />
            {children}
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
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
