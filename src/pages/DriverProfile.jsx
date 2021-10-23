import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Profile from './Driver/Profile';
import Income from './Driver/Income';
import TripHistory from './Driver/TripHistory';
import Complain from './Driver/Complain';
function DriverProfile() {
    const {id, type} = useParams()
  const [dri, setDri] = useState()
    useEffect(()=>{
        fetch('http://localhost:8000/driver/'+id)
        .then(data => data.json())
        .then(data=> {
            setDri(data)
            console.log(data)
        })
    }, [])

   
    return (
        <>
        <div>
        <ul>
                            <li style={{width:"25%"}}><Link class="active" to={'/admin/driver/profile/'+id }>Profile</Link></li>
                            <li style={{width:"25%"}}><Link  to={'/admin/driver/income/'+id }>Income</Link></li>
                            <li style={{width:"25%"}}><Link to={'/admin/driver/tripHistory/'+id}>Trip History</Link></li>
                             <li style={{width:"25%"}}><Link to={'/admin/driver/complain/'+id}>Complains</Link></li>
  </ul>
    </div>
         {
                ( type==='profile' )
                ? <Profile />
               : (type === 'income')
               ? <Income />
               : (type === 'tripHistory')
               ? <TripHistory />
               : <Complain />
            }
            </>
    )
}

export default DriverProfile
