import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap'

function TripHistory ()  {
    const [his, setHis] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/driver_tripHistory')
        .then(data => data.json())
        .then(data=> {
            setHis(data)
            console.log(data)
        })
    }, [])
    return (
    <div>
    <div>
    </div>
        <div>
            <h2>Trip history</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Pickup</th>
                    <th>Destination</th>
                    <th>Distance</th>
                    <th>Payment</th>
                    
                </tr>
                </thead>
                <tbody>
                    {his.map((item, id) => (
                        <tr key={id}>
                            <td>{item.pickup}</td>
                            <td>{item.destination}</td>
                             <td>{item.distance}</td>
                            <td>{item.payment}</td>
                          
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
        </div>
    )

}

export default TripHistory 
