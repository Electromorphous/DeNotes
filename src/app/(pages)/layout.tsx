"use client";
import ThemeProvider from "@/contexts/ThemeProvider";
import UserProvider from "@/contexts/UserProvider";

type PropsType = {
  children: React.ReactNode;
};

function Layout({ children }: PropsType) {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
}

export default Layout;
