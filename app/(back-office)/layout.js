import React from "react";

export default function BackofficeLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="">
        <h1>Sidebar</h1>
      </div>
      {/* Main body */}
      <div>
        {/* Navbar */}
        <h2>Navbar</h2>
        {/* Body */}
        <main>{children}</main>
      </div>
    </div>
  );
}
