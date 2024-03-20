import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({
    className
}) {
  return (
    <div className={`text-white rounded-lg${className} `}>
        <Layers/>
        <h4>Today Orders</h4>
        <h2 className='text-3xl'>$108.23</h2>
    </div>
  )
}
