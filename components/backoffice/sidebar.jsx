import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.svg";
import { LayoutGrid } from "lucide-react";

export default function Sidebar() {
  return (
    <div
      className="w-64 space-y-6 dark:bg-slate-500 bg-white h-screen shadow-md text-black dark:text-slate-50
   fixed left-0 top-0"
    >
      <Link href="#" className="px-6 py-4">
        <Image src={logo} alt="logo" className="w-20 h-20" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Cataloue</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Customers</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Markets</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Farmers</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Orders</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Staff</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Settings</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Online Store</span>
        </Link>
      </div>
    </div>
  );
}
