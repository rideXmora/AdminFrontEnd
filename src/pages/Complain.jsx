import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap'

function Complain ()  {
    const [complain, setComplain] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/complain')
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
            <h2>Complains about our app</h2>
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
