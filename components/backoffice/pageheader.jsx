import React from "react";
import Heading from "@/components/backoffice/heading";
import { Plus } from "lucide-react";
import Link from "next/link";
export default function PageHeader({ title, href, linkTitle }) {
  return (
    <div className="flex justify-between py-4 mb-4">
      <Heading title={title} />
      <Link
        href={href}
        className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 space-x-3"
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
