import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function SmallCard() {
  return (
    <div className='rounded-lg shadow-lg bg-slate-600'>
         <div className="flex">
        <ShoppingCart className="w-8 h-8 bg-orange-600 rounded-full items-center justify-center flex" />
            <p>Total Order</p>
            <h3>552</h3>
         </div>
    </div>
  )
}
