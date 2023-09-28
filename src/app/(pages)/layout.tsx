"use client";
import ThemeProvider from "@/contexts/ThemeProvider";

type PropsType = {
  children: React.ReactNode;
};

function Layout({ children }: PropsType) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
