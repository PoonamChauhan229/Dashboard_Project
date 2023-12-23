import React from 'react'

import { Line } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
const ChartsHome = ({lineData,pieData}) => {
  return (
    <div>
         <div class="row">

{/* <!-- Area Chart --> */}
<div class="col-xl-8 col-lg-7">
    <div class="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <div class="dropdown no-arrow">
                <a class="dropdown-toggle" href="/" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div class="dropdown-header">Dropdown Header:</div>
                    <a class="dropdown-item" href="/">Action</a>
                    <a class="dropdown-item" href="/">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/">Something else here</a>
                </div>
            </div>
        </div>
        {/* <!-- Card Body --> */}
        <div class="card-body">
            <div class="chart-area">
            <Line data={lineData}
            
                 options={{                    
                    plugins: {
                      title: {
                        display: false,
                      },
                      legend: {
                        display: false
                      },
                      
                    },
                    scales: {
                        x:{
                            grid: {
                                display: false
                              }
                        },
                        y:
                          {
                            grid: {
                                display: false
                              },
                           beginAtZero:true,
                           max:40000, 
                           ticks: {
                                stepSize: 10000,
                              },
                          }
                        },
                    tension:0.5
                  }}

                
                />
                
            </div>
        </div>
    </div>
</div>

{/* <!-- Pie Chart --> */}
<div class="col-xl-4 col-lg-5">
    <div class="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
            <div class="dropdown no-arrow">
                <a class="dropdown-toggle" href="/" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div class="dropdown-header">Dropdown Header:</div>
                    <a class="dropdown-item" href="/">Action</a>
                    <a class="dropdown-item" href="/">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/">Something else here</a>
                </div>
            </div>
        </div>
        {/* <!-- Card Body --> */}
        <div class="card-body">
        

            <div class="chart-pie pt-4 pb-2">
                {/* <canvas id="myPieChart"></canvas> */}

                <Doughnut data={pieData} options={{
                    cutout: 90,
                    responsive: true,
                    maintainAspectRatio: false,
                }}/>


            </div>
            <div class="mt-4 text-center small">
                <span class="mr-2">
                    <i class="fas fa-circle text-primary"></i> Direct
                </span>
                <span class="mr-2">
                    <i class="fas fa-circle text-success"></i> Social
                </span>
                <span class="mr-2">
                    <i class="fas fa-circle text-info"></i> Referral
                </span>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default ChartsHome