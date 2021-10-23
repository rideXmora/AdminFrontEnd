
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
function Driver_org ()  {
    const [driver, setDriver] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/driver')
        .then(data => data.json())
        .then(data=> {
            setDriver(data)
            console.log(data)
        })
    }, [])
    return (
        <div>
            <h2>Drivers List</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                  
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {driver.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.contact_number}</td>
                           
                            <td>
                                <Link style={{color:"#262e2b"}} to={'/orgAdmin/driver/profile/'+item.email}> View more</Link>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
    )
}



export default Driver_org
