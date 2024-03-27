import React from "react";
import PageHeader from "../../../../../components/backoffice/pageheader";
import { Trash2 } from "lucide-react";
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
      <div className="flex px-3 justify-between py-6 bg-slate-300 rounded-lg">
        <button>Export</button>
        <button>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
