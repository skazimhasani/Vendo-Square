"use client";
import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Sun,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <DropdownMenu>
          <DropdownMenuTrigger>
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
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corns are out of stock</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white text-sm rounded-full ">
                      Stock out
                    </p>
                    <p>25 Dec 2024 - 12:45</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Corns are full of stock</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-green-700 text-white text-sm rounded-full ">
                      Stock ful
                    </p>
                    <p>25 Dec 2024 - 12:45</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corns are out of stock</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white text-sm rounded-full ">
                      Stock out
                    </p>
                    <p>25 Dec 2024 - 12:45</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              <Image
                src="/profile.jpg"
                alt="User Profile"
                width={200}
                height={200}
                className="w-8 h-8 rounded-full"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="w-4 h-4 mr-2" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="w-4 h-4 mr-2" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="w-4 h-4 mr-2" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
