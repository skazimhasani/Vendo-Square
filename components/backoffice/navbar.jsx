import { AlignJustify, Bell, Menu, Sun, User } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div
      className="flex items-center justify-between bg-slate-600
     text-slate-50 h-16 px-8
      py-8 left-60 fixed top-0 w-full pr-[20rem]"
    >
      {/* Icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
          >
            <Bell />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
              20
            </div>
          </button>
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}
