import React from 'react'
import { cn } from '../../../lib/cn'
import { Cross, CrossIcon } from 'lucide-react'

const Layout_Hover = () => {
  return (
    <div className={cn('min-w-80 m-auto w-100 bg-white rounded-lg p-4 h-80',"shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]")}>
        <Card />
    </div>
  )
}

const Card = () => {
    return (
        <div className='flex flex-col h-full w-full text-black gap-2'>
            <h2 className='font-bold text-sm'>AshUI UI Components</h2>
            <p className='text-neutral-500 text-sm tracking-tight'>Collection of beautiful components which you can get for free </p>
            <div className='flex justify-center items-center'>
                <button className='flex gap-1 items-center font-bold text-neutral-800 mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-lg text-xs'>
                    <img src="/vite.svg" alt="logo" className='h-8 w-8' />
                    AshUI
                    <CrossIcon className='rotate-x-1' />
                </button>
            </div>
        </div>
    )
}

export default Layout_Hover