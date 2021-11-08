import { useParams } from 'react-router';
import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'

function Past ()  {
    const [past, setPast] = useState([])
    const {customFetch} = useAuth()
     const { id } = useParams()
    useEffect(()=>{
        customFetch('/admin/passenger/pastRides', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                phone: id,
            })
        })
        
        .then(data => {
                /* const modified = data.filter(item => item.rideRequest.passenger.phone == id) */
                setPast(data)
            })
    }, [])
    return (
        <div>
            <h2>Past rides List</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Passenger name</th>
                    <th>Driver name</th>
                    <th>Vehicle No</th>
                    <th>Driver feedback</th>
                    <th>Passenger feedback</th>
                    <th>Driver rating</th>
                    <th>Passenger rating</th>
                    <th>Payment</th>
                </tr>
                </thead>
                <tbody>
                    {past.map((item, id) => (
                        <tr key={id}>
                            <td>{item.rideRequest.passenger.name}</td>
                            <td>{item.rideRequest.driver.name}</td>
                            <td>{item.rideRequest.driver.vehicle.number}</td>
                            <td>{item.driverFeedback}</td>
                             <td>{item.passengerFeedback}</td>
                            <td>{item.driverRating}</td>
                            <td>{item.passengerRating}</td>
                            <td>{item.payment.toFixed(0)}Rs</td>    
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
    )
}



export default Past
