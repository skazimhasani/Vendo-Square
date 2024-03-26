"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo.svg";
import {
  BookImage,
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  LayoutGrid,
  LogOut,
  Monitor,
  ScanSearch,
  SendToBack,
  Settings,
  Tractor,
  Truck,
  User,
  Users2,
  Warehouse,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();
  const sidebarLinks = [
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
      title: "Vendo Community",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
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
  const catalogueLinks = [
    {
      title: "Products",
      href: "/dashboard/products",
      icon: Boxes,
    },
    {
      title: "Categories",
      href: "/dashboard/categories",
      icon: LayoutGrid,
    },
    {
      title: "Attributes",
      href: "/dashboard/attributes",
      icon: SendToBack,
    },
    {
      title: "Coupons",
      href: "/dashboard/coupons",
      icon: ScanSearch,
    },
    {
      title: "Store Sliders",
      href: "/dashboard/sliders",
      icon: Monitor,
    },
  ];
  const [openCatalogue, setOpenCatalogue] = useState(false);
  return (
    <div
      className={
        showSidebar
          ? "sm:block mt-20 sm:mt-0 w-64 space-y-6 dark:bg-slate-500 bg-white h-screen shadow-md text-black dark:text-slate-50 fixed left-0 top-0 overflow-y-scroll"
          : "hidden sm:block mt-20 sm:mt-0 w-64 space-y-6 dark:bg-slate-500 bg-white h-screen shadow-md text-black dark:text-slate-50 fixed left-0 top-0 overflow-y-scroll"
      }
    >
      <h1 className="font-bold text-4xl text-center dark:text-gray-800 text-black uppercase shadow-md">
        Vendo Square
      </h1>
      <div className="space-y-3 flex flex-col">
        <Link
          href="/dashboard"
          onClick={() => setShowSidebar(false)}
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600 text-black"
              : "flex items-center space-x-3 px-6 py-2 text-gray-600 hover:text-black"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger onClick={() => setOpenCatalogue(!openCatalogue)}>
            <button className="flex items-center space-x-6 py-2">
              <div className="flex items-center space-x-3">
                <BookImage />
                <span>Catalogue</span>
              </div>
              {openCatalogue ? <ChevronDown /> : <ChevronRight />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-lg px-3 pl-6 bg-slate-200">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "flex items-center space-x-3 py-2 text-sm  text-green-600"
                      : "flex items-center space-x-3 py-2 text-gray-600 hover:text-green-600 text-sm"
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href === pathname
                  ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600 text-black"
                  : "flex items-center space-x-3 px-6 py-2 text-gray-600 hover:text-black"
              }
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
