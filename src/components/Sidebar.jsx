import React from 'react'
import { motion } from 'framer-motion'

export default function Sidebar({ dark }){
  return (
    <aside className={dark ? 'w-72 p-6 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen' : 'w-72 p-6 bg-white min-h-screen'}>
      <div className='flex items-center gap-3'>
        <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-bold'>F</div>
        <div>
          <div className='font-bold text-lg'>Fitness</div>
          <div className='text-sm text-slate-400'>Dashboard</div>
        </div>
      </div>

      <nav className='mt-8 space-y-2'>
        <NavItem label='Overview' active />
        <NavItem label='Workout' />
        <NavItem label='Diet Plan' />
        <NavItem label='Goals' />
        <NavItem label='Schedule' />
        <NavItem label='Progress' />
      </nav>

      <div className='mt-8 text-sm text-slate-400'>v1.0 • Ready</div>
    </aside>
  )
}

function NavItem({ label, active }){
  return (
    <motion.div whileHover={{ x: 6 }} className={'px-3 py-2 rounded-md ' + (active ? 'bg-white/6 text-white font-medium' : 'text-slate-300 hover:bg-white/4')}>
      {label}
    </motion.div>
  )
}
