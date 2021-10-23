import React, {useState, useEffect} from 'react'
//import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'

import  {Link}  from 'react-router-dom';

function Complain ()  {
    const [complain, setComplain] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/complain_passenger')
        .then(data => data.json())
        .then(data=> {
            setComplain(data)
            console.log(data)
        })
    }, [])
    return (
    <div>
    <div>
    </div>
        <div>
            <h2>Complains about the passenger</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Message</th>
                    
                </tr>
                </thead>
                <tbody>
                    {complain.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.message}</td>
                          
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
        </div>
    )

}

export default Complain 
