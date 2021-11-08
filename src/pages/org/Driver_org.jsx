
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'

function Driver_org ()  {
    const [driver, setDriver] = useState([])
    const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/orgAdmin/drivers/registered')
        
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
                   {driver.filter(item => !item.suspend).map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                           
                            <td>
                                <Link style={{color:"#262e2b"}} to={'/orgAdmin/driver/profile/'+item.phone}> View more</Link>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
    )
}



export default Driver_org
