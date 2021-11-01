import React, {useState, useEffect} from 'react'

import { Table } from 'reactstrap'

import  {Link, useParams}  from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


function Driver ()  {
    const {id} = useParams()
    const [driver, setDriver] = useState([])
    const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/admin/driver/all')
        .then(data=> {
            setDriver(data)
            console.log(data)
       /*  .then(data=> {
            const filtered = data.find(item=>item.driverOrganization.id===id)
            setDriver(filtered) */
        })
    }, [])
    return (
    <div>

    <div>
   
    </div>
        <div>
            <h2>Drivers list</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                      <th>Email</th>
            
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {driver.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            
                            <td>
                                <Link style={{color:"#262e2b"}} to={'/admin/driver/profile/'+ item.phone}>View more</Link>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
        </div>
    )

}

export default Driver 
