import React from 'react'
import { motion } from 'framer-motion'

export default function ScheduleCard(){
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className='rounded-2xl p-4 glass-card shadow-lg'>
      <h4 className='font-semibold mb-3'>My Schedule</h4>
      <ul className='text-sm space-y-2 text-slate-300'>
        <li><strong>Mon</strong> — Stretch 20 mins</li>
        <li><strong>Tue</strong> — Cardio 30 mins</li>
        <li><strong>Wed</strong> — Yoga 45 mins</li>
      </ul>
      <div className='mt-4'>
        <button className='w-full py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold'>Start Workout</button>
      </div>
    </motion.div>
  )
}
