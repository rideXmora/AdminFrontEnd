
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import { useAuth } from '../contexts/AuthContext';

function Passenger ()  {
    const [pas, setPas] = useState([])
    const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/admin/passenger/all')
        .then(data=> {
            setPas(data)
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
                    {pas.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                           
                            <td>
                                <Link style={{color:"#262e2b"}} to={'/admin/passenger/profile/'+item.phone}> View more</Link>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
    )
}



export default Passenger
