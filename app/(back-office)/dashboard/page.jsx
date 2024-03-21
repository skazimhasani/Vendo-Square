import React from 'react'
import Heading from "@/components/backoffice/heading";
import LargeCards from "@/components/backoffice/largecards";
import SmallCards from "@/components/backoffice/smallcards";
import DashboardCharts from "@/components/backoffice/dashboardcharts";
import CustomDataTable from "@/components/backoffice/customdatatable";

export default function DashboardPage() {
  return (
    <div> 
      <Heading title="Dashboard Overview" />
      {/* Large Card */}
      <LargeCards/>
      {/* Small Card */}
      <SmallCards />
      {/* Charts */}
      <DashboardCharts/>
      {/* Recent Orders Table */}
      <CustomDataTable />
    </div>
  )
}
