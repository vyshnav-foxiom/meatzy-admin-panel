import React from 'react'
import bg from "@/assets/images/wall-fish.jpg"
import DashboardPieChart from './DashboardPieChart'
import BarChart from './BarCharts'
const Dashboard = () => {
  return (
    // <div
    //   className="relative h-screen w-full bg-cover bg-center"
    //   style={{ backgroundImage: `url(${bg})` }}
    // >
    //   <div className="absolute inset-0 bg-black/50" /> {/* overlay */}
    //   <div className="relative z-10 text-white p-8">Dashboard</div>
    // </div>
    <div className=''>
    <div className='grid grid-cols-2 gap-4'>
       <DashboardPieChart/>
       <BarChart/>   
    </div>
     
    </div>

  )
}

export default Dashboard