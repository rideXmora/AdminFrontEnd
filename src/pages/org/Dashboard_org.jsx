import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import StatusCard_org from '../../components/status-card/StatusCard_org'
import statusCards_org from '../../assets/JsonData/status-card-data_org.json'
import Table from '../../components/table/Table'
const chartOptions = {
    series: [{
        name: 'Active Drivers',
        data: [4,10,20,40,36,90,130]
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
 
const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
       
    </tr>
)






const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Welcome to Organizational Admin Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards_org.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard_org
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                
                                </div>
                            ))
                        }
                    </div>
                </div>
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
                            height='100%'
                        />
                    </div>
                </div>
               <div>
                   <div>
        <h2>Top Drivers</h2>
            <table id="customers">
  <tr>
    <th>Name</th>
    <th>Contact Number</th>
    
  </tr>
  <tr>
    <td>Mathu</td>
    <td>0752250313</td>
   </tr>
 
  <tr>
    <td>Divus</td>
    <td>0778311328</td>
    
   
  </tr>
  <tr>
    <td>Sheron</td>
    <td>0762251247</td>
   
  </tr>
 
 
  
</table>
        </div>
               </div>
                
            </div>
        </div>
    )
}

export default Dashboard