import React from "react";
import PageHeader from "../../../../../components/backoffice/pageheader";
import TableActions from "../../../../../components/backoffice/tableactions";
export default function CategoriesPage() {
  return (
    <div>
      {/*Header*/}
      <PageHeader
        title="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add New Category"
      />
      <TableActions />
    </div>
  );
}
