"use client";
import React from "react";
import Sidebar from "@/components/backoffice/sidebar";
import Navbar from "@/components/backoffice/navbar";
export default function BackofficeLayout({ children }) {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Main body */}
      <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {/* Body */}
        <main className="p-8 bg-slate-100 dark:bg-slate-400 text-slate-50 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
