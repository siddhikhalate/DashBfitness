import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const data = {
  labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  datasets: [
    { label: 'Calories', data: [400,450,420,500,480,300,250], borderRadius: 6, barThickness: 14 },
    { label: 'Steps', data: [2000,3000,2500,4000,3500,1800,1000], borderRadius: 6, barThickness: 14 }
  ]
}

const options = {
  responsive: true,
  plugins: { legend: { position: 'bottom', labels: { color: '#cbd5e1' } }, tooltip: { mode: 'index' } },
  scales: {
    x: { ticks: { color: '#94a3b8' } },
    y: { ticks: { color: '#94a3b8' } }
  }
}

export default function ActivityChart(){
  return <Bar data={data} options={options} />
}
