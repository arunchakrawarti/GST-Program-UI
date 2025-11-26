"use client";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-textPrimary">
      <Header />
      <main className="flex-grow  bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
