import React from 'react'
import SmallCard from './smallcard'

export default function SmallCards() {
  const orderStats=[
    {
      period: "Total Orders",
      sales: "108.23",
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: "130.23",
      color: "bg-orange-600",
    },
    {
      period: "This Month",
      sales: "328.23",
      color: "bg-blue-600",
    },
    {
      period: "Last Month",
      sales: "108.23",
      color: "bg-blue-400",
    },
    {
      period: "All Time Sales",
      sales: "10238.23",
      color: "bg-green-300",
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 ">
       {orderStats.map((state,i)=>{
        return (
          <SmallCard />
        )
       })}
    </div>
  )
}
