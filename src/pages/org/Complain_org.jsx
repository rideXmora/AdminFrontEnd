import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
function Complain_org ()  {
    const [complain, setComplain] = useState([])
     const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/orgAdmin/ride/complains')
        .then(data=> {
            setComplain(data)
            console.log(data)
        })
    }, [])
    return (
    <div>
    <div>
    </div>
        <div>
            <h2>Complains about our Organization</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Driver Name</th>
                    <th>Passenger Name</th>
                    <th>Driver Complain</th>
                    <th>Passenger Complain</th>
                    
                </tr>
                </thead>
                <tbody>
                    {complain.map((item, id) => (
                        <tr key={id}>
                            <td>{item.ride.driver.name}</td>
                            <td>{item.ride.passenger.name}</td>
                            <td>{item.passengerComplain}</td>
                            <td>{item.driverComplain}</td>
                          
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
        </div>
    )

}

export default Complain_org 
