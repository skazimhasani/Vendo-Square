import React from 'react'
import Heading from "@/components/backoffice/heading";
import LargeCards from "@/components/backoffice/largecards";
import SmallCards from "@/components/backoffice/smallcards";


export default function DashboardPage() {
  return (
    <div> 
      <Heading title="Dashboard Overview" />
      {/* Large Card */}
      <LargeCards/>
      {/* Small Card */}
      <SmallCards />
      {/* Charts */}
      {/* Recent Orders Table */}
    </div>
  )
}
