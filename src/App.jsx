import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import ActivityChart from './components/ActivityChart'
import ScheduleCard from './components/ScheduleCard'

export default function App(){
  const [dark, setDark] = useState(true)
  return (
    <div className={dark ? 'min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white' : 'min-h-screen bg-gray-50 text-slate-900'}>
      <div className='flex'>
        <Sidebar dark={dark} />
        <div className='flex-1 p-6'>
          <Header dark={dark} setDark={setDark} />
          <main className='space-y-6 mt-6'>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='md:col-span-2'>
                <div className='rounded-2xl p-6 glass-card shadow-lg'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h2 className='text-2xl font-bold'>Welcome back, Siddhi 👋</h2>
                      <p className='text-sm text-slate-300'>Here's your activity overview for the week.</p>
                    </div>
                    <div className='text-sm'>
                      <div className='text-xs text-slate-300'>Goal: <span className='font-semibold'>Lose 2kg</span></div>
                      <div className='mt-2 inline-flex items-center px-3 py-1 bg-black/20 rounded-full text-sm'>Progress: 45%</div>
                    </div>
                  </div>

                  <div className='mt-6'>
                    <ActivityChart />
                  </div>
                </div>
              </div>

              <div>
                <div className='rounded-2xl p-4 glass-card shadow-lg space-y-4'>
                  <h3 className='text-lg font-semibold'>Today's Summary</h3>
                  <div className='grid grid-cols-1 gap-3'>
                    <StatCard title='Workout' value='00:40' />
                    <StatCard title='Calories' value='1800 kcal' />
                    <StatCard title='Steps' value='3,200' />
                  </div>
                </div>
              </div>
            </section>

            <section className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              <div className='lg:col-span-2'>
                <div className='rounded-2xl p-6 glass-card shadow-lg'>
                  <h4 className='font-semibold mb-4'>Recent Meals</h4>
                  <div className='overflow-x-auto'>
                    <table className='min-w-full text-left'>
                      <thead className='text-sm text-slate-400'>
                        <tr><th>Food</th><th>Meal</th><th>Calories</th><th>Time</th></tr>
                      </thead>
                      <tbody className='mt-2'>
                        <tr className='border-b border-white/10'>
                          <td className='py-3'>Burrito</td><td>Lunch</td><td>600</td><td>13:00</td>
                        </tr>
                        <tr className='border-b border-white/10'>
                          <td className='py-3'>Salad</td><td>Dinner</td><td>320</td><td>20:00</td>
                        </tr>
                        <tr className='border-b border-white/10'>
                          <td className='py-3'>Protein Shake</td><td>Snack</td><td>220</td><td>17:30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div>
                <ScheduleCard />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
