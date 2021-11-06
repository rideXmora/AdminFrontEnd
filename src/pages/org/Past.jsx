
import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'

function Past ()  {
    const [past, setPast] = useState([])
    const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/orgAdmin/ride/past')
        
        .then(data=> {
            setPast(data)
            console.log(data)
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
                     <th>Distance</th>
                    <th>Payment</th>
                </tr>
                </thead>
                <tbody>
                    {past.map((item, id) => (
                        <tr key={id}>
                            <td>{item.passenger.name}</td>
                            <td>{item.driver.name}</td>
                            <td>{item.vehicle.number}</td>
                            <td>{item.driverFeedback}</td>
                             <td>{item.passengerFeedback}</td>
                            <td>{item.driverRating}</td>
                            <td>{item.passengerRating}</td>
                            <td>{item.distance}</td>
                            <td>{item.payment}</td>    
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
    )
}



export default Past
