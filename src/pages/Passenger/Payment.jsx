import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'

const chartOptions = {
    series: [{
        name: 'Monthly Payment',
        data: [400,700,200,900,360,800,300]
    }
    ],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}
 


const Income = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
      <div><h2>Monthly Payment</h2></div>
        <div>
            
            <div className="row">
                
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='200%'
                           
                        />
                    </div>
                </div>
               <div>
                   <div>
        
   
        </div>
               </div>
                
            </div>
        </div>
        </div>
    )
}

export default Income