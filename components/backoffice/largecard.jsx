import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({
    item
}) {
  return (
    <div className={`text-white shadow-md p-8 flex items-center flex-col gap-2 rounded-lg ${item.color} `}>
        <Layers/>
        <h4>{item.period}</h4>
        <h2 className='lg:text-3xl text-2xl'>{item.sales}</h2>
    </div>
  )
}
