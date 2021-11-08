import React, { useState, useEffect } from 'react'
import { useParams , useHistory} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from 'reactstrap';
function Profile () {
    const {id} = useParams()
     const {customFetch} = useAuth()
      const history = useHistory()
  const [pas, setPas] = useState()
    useEffect(()=>{
        customFetch('/admin/passenger/all')
        .then(data=> {
            const filtered = data.find(item=>item.phone===id)
            setPas(filtered)
           
        
        })
    },[])
      
    const handleSuspend = () => {
        customFetch('/admin/passenger/suspend', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                phone: id,
                suspend: true
            })
        })
        .then(data=> {
            history.push('/admin/passenger')
        })
    }

    return(
        <div>
            <div><h2>Profile</h2></div>
            <table>
                <tr>
                    <td> Passenger Name</td>
                    <td>{pas?.name}</td>
                </tr>
                <tr>
                    <td> Rating</td>
                    <td>{pas?.totalRating}</td>
                </tr>
                  <tr>
                    <td> Total Rides</td>
                    <td>{pas?.totalRides}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{pas?.email}</td>
                </tr>
                <tr>
                    <td> Contact numer</td>
                    <td>{pas?.phone}</td>
                </tr>
               
            </table>
 {/*                <button type='button' style={{backgroundColor:"#5c8d89"}} className='btn-btn-warning' onClick={handleSuspend}>Suspend</button> */}
                 <Button type='button' className='btn-btn-warning' onClick={handleSuspend} >Suspend</Button>
            
        </div>
    )
}

export default Profile

     