import React from 'react'
import { motion } from 'framer-motion'

export default function StatCard({ title, value }){
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className='p-3 bg-white/3 rounded-lg'>
      <div className='text-xs text-slate-300'>{title}</div>
      <div className='text-xl font-semibold'>{value}</div>
    </motion.div>
  )
}
