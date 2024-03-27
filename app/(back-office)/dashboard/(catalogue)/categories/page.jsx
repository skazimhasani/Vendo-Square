import React from "react";
import PageHeader from "../../../../../components/backoffice/pageheader";
import { Search, Trash2 } from "lucide-react";
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
      <div className="flex px-8 justify-between py-6 bg-slate-300 rounded-lg">
        <button>Export</button>
        {/*Search*/}
        <div className="pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <button>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
