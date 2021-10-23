
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'

function DriverRegistration ()  {
    const [driv, setDriv] = useState([])
    const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/orgAdmin/drivers/unregistered')
        .then(data=> {
            setDriv(data)
            console.log(data)
        })
    }, [])
    return (
        <div>
            <h2>Newly Registerd drivers List</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                  
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {driv.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                           
                            <td>
                                <Link style={{color:"#262e2b"}} to={'/orgAdmin/driverRegister/accept/'+item.phone}> View more</Link>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
    )
}



export default DriverRegistration
