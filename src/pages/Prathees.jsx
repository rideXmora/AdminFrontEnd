import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

import { ButtonGroupProps } from 'reactstrap';
import Profile from './Passenger/Profile';
import Payment from './Passenger/Payment';
import TripHistory from './Passenger/TripHistory';
import Complain from './Passenger/Complain';
import { useAuth } from '../contexts/AuthContext';

function Prathees() {
    const {id, type} = useParams()
     const {customFetch} = useAuth()
  const [pas, setPas] = useState()
    useEffect(()=>{
        customFetch('/admin/passenger/all')
        .then(data=> {
            const filtered = data.find(item=>item.phone===id)
            setPas(filtered)
            console.log(filtered)
        })
    }, [])

   
    return (
        <>
        <div>
        <ul>
                            <li style={{width:"25%"}}><Link class="active" to={'/admin/passenger/profile/'+id }>Profile</Link></li>
                            <li style={{width:"25%"}}><Link  to={'/admin/passenger/payment/'+id }>Payment</Link></li>
                            <li style={{width:"25%"}}><Link to={'/admin/passenger/tripHistory/'+id}>Trip History</Link></li>
                             <li style={{width:"25%"}}><Link to={'/admin/passenger/complain/'+id}>Complains</Link></li>
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

export default Prathees
 
