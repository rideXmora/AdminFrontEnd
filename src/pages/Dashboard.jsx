
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import StatusCard from '../components/status-card/StatusCard'
import statusCards from '../assets/JsonData/status-card-data.json'
import Table from '../components/table/Table'
import { useAuth } from '../contexts/AuthContext'
import React, {useState, useEffect} from 'react'

const chartOptions = {
    series: [{
        name: 'Number of rides',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
    const { customFetch } = useAuth()
    const [driver, setDriver] = useState([])
    const [org, setOrg] = useState()
    const [waiting, setWaiting] = useState(true)
    
    useEffect(() => {
        customFetch('/admin/passenger/top')
            .then(data => {
                setDriver(data)
                console.log(data)
            })
        
        customFetch('/orgAdmin/profile')
        .then((data)=> {
            setOrg(data)

        })

        customFetch('/admin/passenger/adminRidesStats')
        .then((data)=> {
            Object.keys(data).forEach(month=>{
                const monthData = data[month]
                switch(month) {
                    case 'JANUARY':
                        // code block
                        break;
                    case 'NOVEMBER':
                        chartOptions.series[0].data[10]=monthData.count
                        setWaiting(false)
                        break;
                    default:
                        // code block
                }
            })
        })
    }, [])

    return (
        <div>
            <h2 className="page-header">Welcome to Overall Admin Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-9" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        /* count={org?.totalIncome.toFixed(0) + " Rs"} */
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
                        {!waiting &&
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
                        }
                    </div>
                </div>
            <div>
            <h2>Top Passengers List</h2>
            <div className="table-wrapper">
                <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                  
                   
                </tr>
                </thead>
                <tbody>
                     {driver.map((item, id) => (
                        <tr key={id}>
                            <td>{item.id?.name}</td>
                            <td>{item.id?.phone}</td>
                           
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
        </div>
        </div>
                   
       
    )
}

export default Dashboard