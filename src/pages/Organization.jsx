import React, {useState, useEffect} from 'react'
//import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'

import  {Link}  from 'react-router-dom';

import "./Organization.css";
//import { Link } from 'react-router-dom'
//import organization_list from 'D:\New folder\tua-react-admin\src\assets\JsonData\organization_list.json'
import organization_list from '../assets/JsonData/organization_list.json'

function Organization ()  {
    const [organizations, setOrgniztions] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/organizations')

        .then(data => data.json())
        .then(data=> {
            setOrgniztions(data)
            console.log(data)
        })
    }, [])
    return (
    <div>
    <div>
    </div>
        <div>
            <h2>Organizations</h2>
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
                    {organizations.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.contact_number}</td>
                            <td>{item.email}</td>
                           
                            <td>
                               { <Link style={{color:"#262e2b"}} to={'/admin/organization/profile/'+item.email}>   View more</Link>}
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
        </div>
    )

}

export default Organization 
