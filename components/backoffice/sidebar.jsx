import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-64 space-y-6 dark:bg-slate-500 bg-white h-screen shadow-md text-black dark:text-slate-50 p-3 fixed left-0 top-0">
      <Link href="#" className="mb-6">
        Logo
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link href="#">Dashboard</Link>
        <Link href="#">Cataloue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
