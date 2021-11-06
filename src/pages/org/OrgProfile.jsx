import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'

function OrgProfile () {
    const {id} = useParams()
  const [org, setOrg] = useState()
  const {customFetch} = useAuth()
    useEffect(()=>{
        customFetch('/orgAdmin/profile')
        .then((data)=> {
            setOrg(data)
           
        
        })
    })
    return(
        
        <div>
            <div><h2>Profile</h2></div>
           <table>
                <tr>
                    <td>  Name</td>
                    <td>{org?.name}</td>
                </tr>
                <tr>
                    <td> Contact Number</td>
                    <td>{org?.phone}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{org?.email}</td>
                </tr>
                <tr>
                    <td> Business Reg No</td>
                    <td>{org?.businessRegNo}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{org?.address}</td>
                </tr>
                <tr>
                    <td> Total Income</td>
                    <td>{org?.totalIncome}</td>
                </tr>
              
            </table>
            
        </div>
    )
}

export default OrgProfile