
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { useAuth } from '../../contexts/AuthContext'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
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






const Payment = () => {
    const { id } = useParams()
    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    const { customFetch } = useAuth()
    
    const [waiting, setWaiting] = useState(true)
    
    useEffect(() => {

        customFetch('/orgAdmin/driver/adminRidesStats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: id,
            })
        })
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
            <h2 className="page-header">Welcome to Organizational Admin Dashboard</h2>
            <div className="row">
               
                <div className="col-9">
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
            
        </div>
        </div>
        </div>
                   
       
    )
}

export default Payment