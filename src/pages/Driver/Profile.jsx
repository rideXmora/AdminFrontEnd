import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Profile () {
    const {id} = useParams()
    const [dri, setDri] = useState()
    const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/admin/driver/all')
        .then(data=> {
            const filtered = data.find(item=>item.phone===id)
            setDri(filtered)
        
        })
    },[])
    return(
        
        <div>
            <div><h2>Profile</h2></div>
            <table>
                <tr>
                    <td> Driver Name</td>
                    <td>{dri?.name}</td>
                </tr>
               <tr>
                    <td> Registered Organization</td>
                    <td>{dri?.driverOrganization.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{dri?.email}</td>
                </tr>
                <tr>
                    <td> Contact numer</td>
                    <td>{dri?.phone}</td>
                </tr>
                  <tr>
                    <td>City</td>
                    <td>{dri?.city}</td>
                </tr>
                  <tr>
                    <td>driving license</td>
                    <td>{dri?.drivingLicense}</td>
                </tr>
                  <tr>
                    <td>Total income</td>
                    <td>{dri?.totalIncome}</td>
                </tr>
                  <tr>
                    <td>Total Ratings </td>
                    <td>{dri?.totalRatings}</td>
                </tr>
                  <tr>
                    <td>Total Rides</td>
                    <td>{dri?.totalRides}</td>
                </tr>
                  <tr>
                    <td>Vehicle number</td>
                    <td>{dri?.vehicle.number}</td>
                </tr>
                  <tr>
                    <td>Vehicle type</td>
                    <td>{dri?.vehicle.type}</td>
                </tr>
                  <tr>
                    <td>Vehicle Model</td>
                    <td>{dri?.vehicle.model}</td>
                </tr>
                  <tr>
                    <td>Vehicle RegNo</td>
                    <td>{dri?.vehicle.RegNo}</td>
                </tr>
            </table>
              
            
        </div>
    )
}

export default Profile