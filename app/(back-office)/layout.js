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
        <main className="p-8 bg-slate-400 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
