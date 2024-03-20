import React from 'react'
import Heading from "@/components/backoffice/heading";
import LargeCards from "@/components/backoffice/largecards";

export default function DashboardPage() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Card */}
      <LargeCards/>
      {/* Small Card */}
      {/* Charts */}
      {/* Recent Orders Table */}
    </div>
  )
}
