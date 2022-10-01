import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-col min-h-screen relative bg-orange-500">
      <Header />
      <main className="flex-1">
        {children}
        </main>
        <Footer />
    </div>
  );
}
