import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

import { ButtonGroupProps } from 'reactstrap';
import Profile from './Passenger/Profile';
import Payment from './Passenger/Payment';
import TripHistory from './Passenger/TripHistory';
import Complain from './Passenger/Complain';
import { useAuth } from '../contexts/AuthContext';

function Driver_Specific() {
    const {id, type} = useParams()
     const {customFetch} = useAuth()
  const [dri, setDri] = useState()
    useEffect(()=>{
        customFetch('/admin/driver/all')
        .then(data=> {
            const filtered = data.find(item=>item.phone===id)
            setDri(filtered)
            console.log(filtered)
        })
    }, [])

   
    return (
        <>
        <div>
        <ul>
                            <li style={{width:"25%"}}><Link class="active" to={'/admin/driver/profile/'+id }>Profile</Link></li>
                            <li style={{width:"25%"}}><Link  to={'/admin/driver/payment/'+id }>Payment</Link></li>
                            <li style={{width:"25%"}}><Link to={'/admin/driver/tripHistory/'+id}>Trip History</Link></li>
                             <li style={{width:"25%"}}><Link to={'/admin/driver/complain/'+id}>Complains</Link></li>
  </ul>
    </div>
         {
                ( type==='profile' )
                ? <Profile />
               : (type === 'payment')
               ? <Payment />
               : (type === 'tripHistory')
               ? <TripHistory />
               : <Complain />
            }
            </>
    )
}

export default Driver_Specific
 
