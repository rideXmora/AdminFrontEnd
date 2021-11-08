import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
function Complain_org ()  {
    const [complain, setComplain] = useState([])
     const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/orgAdmin/ride/complains')
        .then(data=> {
           const modified = data.filter(item => item.complainStatus == "RAISED")
                setComplain(modified)
        })
    }, [])
    const handleSolve = (id) => {
        customFetch('/orgAdmin/ride/complain/changeStatus', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                id,
                complainStatus: "SOLVED"
            })
        })
        .then(data=> {
            setComplain(complains=>complains.filter(com=>com.id!==id))
        })
    }
    return (
    <div>
    <div>
    </div>
        <div>
            <h2>Complains about our Organization</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Driver Name</th>
                    <th>Passenger Name</th>
                    <th>Driver Complain</th>
                    <th>Passenger Complain</th>
                     <th></th>
                   
                    
                    
                </tr>
                </thead>
                <tbody>
                    {complain.map((item, id) => (
                        <tr key={id}>
                            <td>{item.ride.rideRequest.driver.name}</td>
                            <td>{item.ride.rideRequest.passenger.name}</td>
                            <td>{item.passengerComplain}</td>
                            <td>{item.driverComplain}</td>
                           <button style = {{backgroundColor:"#74b49b"}}type='button' className='btn-btn-warning' onClick={()=>handleSolve(item.id)}>Solve</button>
                          
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
        </div>
    )

}

export default Complain_org 
