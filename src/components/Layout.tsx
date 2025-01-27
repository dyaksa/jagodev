import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isArticle = location.pathname.startsWith("/article/");

  return (
    <div className="min-h-screen bg-white">
      {!isHome && !isArticle && <Header />}
      {children}
    </div>
  );
};

export default Layout;
