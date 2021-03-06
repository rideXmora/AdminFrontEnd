
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import { useAuth } from '../contexts/AuthContext';

function Driver ()  {
    const [dri, setDri] = useState([])
    const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/admin/driver/all')
        .then(data=> {
            setDri(data)
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
                     {dri.filter(item => !item.suspend).map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                           
                            <td>
                                <Link style={{color:"#262e2b"}} to={'/admin/driver/profile/'+item.phone}> View more</Link>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
    )
}



export default Driver
