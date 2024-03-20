import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({
    data
}) {
  return (
    <div className={`text-white shadow-md p-8 flex items-center flex-col gap-2 rounded-lg ${data.color} `}>
        <Layers/>
        <h4>{data.period}</h4>
        <h2 className='lg:text-3xl text-2xl'>{data.sales}</h2>
    </div>
  )
}
