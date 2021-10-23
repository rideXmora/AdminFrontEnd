
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
function Passenger ()  {
    const [Passenger, setPassenger] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/passenger')
        .then(data => data.json())
        .then(data=> {
            setPassenger(data)
            console.log(data)
        })
    }, [])
    return (
        <div>
            <h2>Passengers List</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                  
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {Passenger.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.contact_number}</td>
                           
                            <td>
                                <Link style={{color:"#262e2b"}} to={'/admin/passenger/profile/'+item.email}> View more</Link>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
    )
}



export default Passenger
