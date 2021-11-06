import React from 'react'
import { useParams, Link } from 'react-router-dom';
import "./Yogo.css";

import Profile from './organizations/Profile'

import Income from './organizations/Income'


function Yogo() {
    const {type, id} = useParams()
  

    
    return (
        <div>
            <div>
                <ul >
                    <li><Link  to={'/admin/organization/profile/'+ id }>Profile</Link></li>
                    <li><Link  to={'/admin/organization/income/'+id }>Income</Link></li>
                    
                    
                </ul>
            </div>
            {
                ( type==='profile' )
                ? <Profile />
                : 
                <Income/>
                
            }
            
        </div>
    )
}

export default Yogo
