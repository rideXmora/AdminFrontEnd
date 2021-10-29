import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'

function Profile () {
    const {id} = useParams()
  const [driv, setDriv] = useState()
  const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/orgAdmin/drivers/registered')
        .then(data=> {
            const filtered = data.find(item=>item.phone===id)
            setDriv(filtered)
            console.log(filtered)
        
        })
    })
    return(
        
        <div>
            <div><h2>Profile</h2></div>
           <table>
                <tr>
                    <td> Driver Name</td>
                    <td>{driv?.name}</td>
                </tr>
                <tr>
                    <td> Contact Number</td>
                    <td>{driv?.phone}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{driv?.email}</td>
                </tr>
                <tr>
                    <td> City</td>
                    <td>{driv?.city}</td>
                </tr>
                <tr>
                    <td>Vehicle Number</td>
                    <td>{driv?.vehicle.number}</td>
                </tr>
                <tr>
                    <td>Driving License</td>
                    <td>{driv?.drivingLicense}</td>
                </tr>
                <tr>
                    <td> Vehicle Type</td>
                    <td>{driv?.vehicle.vehicleType}</td>
                </tr>
                  <tr>
                    <td> Model</td>
                    <td>{driv?.vehicle.model}</td>
                </tr>
                  <tr>
                    <td> License </td>
                    <td>{driv?.vehicle.license}</td>
                </tr>
                  <tr>
                    <td> Vehicle Type</td>
                    <td>{driv?.vehicle.insurance}</td>
                </tr>
                  <tr>
                    <td> Vehicle Reg No</td>
                    <td>{driv?.vehicle.vehicleRegNo}</td>
                </tr>
              
            </table>
            
        </div>
    )
}

export default Profile