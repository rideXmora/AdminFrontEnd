import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import "./Yogo.css";
import { ButtonGroupProps } from 'reactstrap';
import Profile from './organizations/Profile'
import Driver from './organizations/Driver'
import Income from './organizations/Income'

function Yogo() {
    const {type, id} = useParams()
  

    
    return (
        <div>
            <div>
                <ul>
                    <li><Link  to={'/admin/organization/profile/'+ id }>Profile</Link></li>
                    <li><Link  to={'/admin/organization/income/'+id }>Income</Link></li>
                    <li><Link to={'/admin/organization/driver/'+id}>Drivers</Link></li>
                </ul>
            </div>
            {
                ( type==='profile' )
                ? <Profile />
                : ( type === 'income' )
                ? <Income/>
                : <Driver/>
            }
            
        </div>
    )
}

export default Yogo
