import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Profile () {
    const {id} = useParams()
  const [dri, setDri] = useState()
    useEffect(()=>{
        fetch('http://localhost:8000/driver/'+id)
        .then(data => data.json())
        .then(data=> {
            setDri(data)
            console.log(data)
        
        })
    })
    return(
        
        <div>
            <div><h2>Profile</h2></div>
            <table>
                <tr>
                    <td> Driver Name</td>
                    <td>{dri?.name}</td>
                </tr>
                <tr>
                    <td> Profile</td>
                    <td>{dri?.profile}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{dri?.email}</td>
                </tr>
                <tr>
                    <td> Contact numer</td>
                    <td>{dri?.contact_number}</td>
                </tr>
                 <tr>
                    <td> License</td>
                    <td>{dri?.license}</td>
                </tr>
                 <tr>
                    <td> Documents</td>
                    <td>{dri?.documents}</td>
                </tr>
                 <tr>
                    <td> Contact numer</td>
                    <td>{dri?.vehicle}</td>
                </tr>
            </table>
              
            
        </div>
    )
}

export default Profile