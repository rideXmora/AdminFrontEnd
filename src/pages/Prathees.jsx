import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Profile from './Passenger/Profile';
import Payment from './Passenger/Payment';
import TripHistory from './Passenger/TripHistory';
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
                            <li className={type === "profile" ? "active" : ""} style={{width:"33.33%"}}><Link class="active" to={'/admin/passenger/profile/'+id }>Profile</Link></li>
                            <li className={type === "payment" ? "active" : ""} style={{width:"33.33%"}}><Link  to={'/admin/passenger/payment/'+id }>Payment</Link></li>
                           { <li className={type === "tripHistory" ? "active" : ""} style={{width:"33.33%"}}><Link to={'/admin/passenger/tripHistory/'+id}>Trip History</Link></li>}
                            
  </ul>
    </div>
         {
                ( type==='profile' )
                ? <Profile />
               : (type === 'payment')
               ? <Payment />
               : <TripHistory />
               
            }
            </>
    )
}

export default Prathees
 
