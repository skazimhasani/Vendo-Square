import React from "react";
import Sidebar from "@/components/backoffice/sidebar";
import Navbar from "@/components/backoffice/navbar";
export default function BackofficeLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="">
        <Sidebar />
      </div>
      {/* Main body */}
      <div className="w-full">
        <Navbar />
        {/* Body */}
        <main>{children}</main>
      </div>
    </div>
  );
}
