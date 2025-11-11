import React from 'react'
import { FiSearch, FiBell, FiSun, FiMoon } from 'react-icons/fi'

export default function Header({ dark, setDark }){
  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <input className='pl-10 pr-4 py-2 rounded-xl bg-white/5 placeholder:text-slate-300 border border-transparent focus:outline-none focus:ring-2 focus:ring-amber-400' placeholder='Search...' />
          <div className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-300'><FiSearch /></div>
        </div>
        <div className='text-sm text-slate-300'>Good morning 👋</div>
      </div>

      <div className='flex items-center gap-4'>
        <button className='p-2 rounded-md bg-white/5'><FiBell /></button>
        <button onClick={() => setDark(!dark)} className='p-2 rounded-md bg-white/5'>{dark ? <FiSun/> : <FiMoon/>}</button>
        <div className='flex items-center gap-3 bg-white/5 px-3 py-1 rounded-full'>
          <img src='https://via.placeholder.com/36' alt='profile' className='rounded-full' />
          <div className='text-sm'>Siddhi</div>
        </div>
      </div>
    </header>
  )
}
