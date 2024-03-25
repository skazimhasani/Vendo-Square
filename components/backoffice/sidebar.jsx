"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.svg";
import {
  BookImage,
  ExternalLink,
  LayoutGrid,
  LogOut,
  Settings,
  Tractor,
  Truck,
  User,
  Users2,
  Warehouse,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Dashboard",
      icon: LayoutGrid,
      href: "/dashboard",
    },
    {
      title: "Catalog",
      icon: BookImage,
      href: "/dashboard/catalog",
    },
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: Tractor,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Our staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];
  return (
    <div
      className="w-64 space-y-6 dark:bg-slate-500 bg-white h-screen shadow-md text-black dark:text-slate-50
   fixed left-0 top-0"
    >
      <Link href="#" className="px-6 py-4">
        <Image src={logo} alt="logo" className="w-20 h-20" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.href}
              className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="flex items-center space-x-3 px-12 py-2 bg-blue-800 rounded-full">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
