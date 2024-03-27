import React from "react";
import PageHeader from "../../../../../components/backoffice/pageheader";
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
    </div>
  );
}
