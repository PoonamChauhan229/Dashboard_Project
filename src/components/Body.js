import React, { useState } from 'react'
import ChartsHome from './Dashboard/SecondCharts/ChartsHome'
import ProjectIllustrations from './Dashboard/ProjectIllustrationsColorDevelopment/ProjectIllustrations'
import FourTaskStatusCard from './Dashboard/FirstStatusCards_EPT/FourTaskStatusCard'
import { LineData, PieData } from './Dashboard/SecondCharts/ChartData'

const Body = () => {

  const [EarningData,setEarningData]=useState({
    labels:LineData.map((element)=>element.month),
    datasets:[{
      label:"Earnings",
      data:LineData.map((element)=>element.earning),
               
    }
  ],
    
  })

// const config = {
//   type: 'doughnut',
//   data: data,
// };
  const [pieData,setpieData]=useState({
      datasets:[{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: 'rgba(234, 236, 244, 1)',
      hoverOffset: 5,
    }]
    
  })

  return (
    <div>
        <FourTaskStatusCard/>
        <ChartsHome lineData={EarningData} pieData={pieData}/>
        <ProjectIllustrations/>
    </div>
  )
}

export default Body