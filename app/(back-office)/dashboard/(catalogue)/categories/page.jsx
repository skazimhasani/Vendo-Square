import React from "react";
import PageHeader from "../../../../../components/backoffice/pageheader";
import { Download, Search, Trash2 } from "lucide-react";
export default function CategoriesPage() {
  return (
    <div>
      {/*Header*/}
      <PageHeader
        title="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add New Category"
      />
      {/*Table Actions*/}
      {/*Export || Search || Bulk Action*/}
      <div className="flex px-5 gap-8 justify-between py-3 bg-slate-300 rounded-lg items-center">
        <button className="relative inline-flex items-center justify-center px-4 py-3 space-x-3 text-base font-medium text-gray-900 border border-blue-700 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white hover:dark:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <Download />
          <span>Export</span>
        </button>
        {/*Search*/}
        <div className="flex-grow">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-3/4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        {/*Bulk Delete*/}
        <button className="flex items-center text-white dark:text-white hover:dark:text-black flex-row space-x-2 bg-red-600 p-3 rounded-lg">
          <Trash2 />
          <span>Bulk Delete</span>
        </button>
      </div>
    </div>
  );
}
