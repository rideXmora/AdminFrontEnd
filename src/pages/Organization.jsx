import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import "./Organization.css";


function Organization() {
    const [organizations, setOrgniztions] = useState([])
    const { customFetch } = useAuth()
    useEffect(() => {
        customFetch('/admin/orgAdmin/all')
            .then(data => {
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
                        {organizations.filter(item => !item.suspend).map((item, id) => (
                            <tr key={id}>

                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>

                                <td>
                                    {<Link style={{ color: "#262e2b" }} to={'/admin/organization/profile/' + item.phone}>   View more</Link>}
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
