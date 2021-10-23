 
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Profile () {
    const {id} = useParams()
  const [pas, setPas] = useState()
    useEffect(()=>{
        fetch('http://localhost:8000/passenger/'+id)
        .then(data => data.json())
        .then(data=> {
            setPas(data)
            console.log(data)
        
        })
    })
     const handleDelete = () => {
        fetch('http://localhost:8000/passenger/'+id, {
            method: 'DELETE'
        })
        .then(data => data.json())
        .then(data=> {
            setPas(data)
            console.log(data)
        })
    }
    return(
        <div>
            <div><h2>Profile</h2></div>
            <table>
                <tr>
                    <td> Passenger Name</td>
                    <td>{pas?.name}</td>
                </tr>
                <tr>
                    <td> Profile</td>
                    <td>{pas?.profile}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{pas?.email}</td>
                </tr>
                <tr>
                    <td> Contact numer</td>
                    <td>{pas?.contact_number}</td>
                </tr>
            </table>
                <button type='button' className='btn-btn-warning' onClick={handleDelete}>Suspend</button>
            
        </div>
    )
}

export default Profile

     