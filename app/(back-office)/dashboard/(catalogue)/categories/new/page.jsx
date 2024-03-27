import { X } from "lucide-react";
import React from "react";

export default function NewCategoryPage() {
  return (
    <div>
      <div className="flex items-center justify-between py-6 px-12">
        <h2 className="text-xl font-semibold">New Category</h2>
        <button>
          <X />
        </button>
      </div>
    </div>
  );
}
