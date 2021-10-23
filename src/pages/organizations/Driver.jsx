import React, {useState, useEffect} from 'react'

import { Table } from 'reactstrap'

import  {Link, useParams}  from 'react-router-dom';



function Driver ()  {
    const {id} = useParams()
    const [driver, setDriver] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/driver/org/'+id)
        .then(data => data.json())
        .then(data=> {
            setDriver(data)
            console.log(data)
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
            
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {driver.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.contact_number}</td>
                            
                            <td>
                                <Link style={{color:"#262e2b"}} to={'/admin/driver/profile/'+ item.email}>View more</Link>
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
