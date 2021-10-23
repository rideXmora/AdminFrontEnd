 
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'

function Accept () {
    const history = useHistory()
    const {id} = useParams()
    const [driv, setDriv] = useState()
    const {customFetch} = useAuth()

    useEffect(()=>{
        customFetch('/orgAdmin/drivers/unregistered')
        .then(data=> {
            const filtered = data.find(item=>item.phone===id)
            setDriv(filtered)
            console.log(filtered)
        
        })
    }, [])

    const handleSuspend = () => {
        customFetch('/orgAdmin/driver/suspend', {
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
            // setDriv(data)
            // console.log(data)
            history.push('/orgAdmin/driverRegister')
        })
    }

    const handleEnable = () => {
        customFetch('/orgAdmin/drivers/enableDriver', {
            method: 'PUT',
            headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                phone: id,
                enabled: true
            })
        })
        .then(data=> {
            // setDriv(data)
            // console.log(data)
            history.push('/orgAdmin/driverRegister')
        })
    }
    return(
        <div>
            <div><h2>Driver profile details</h2></div>
            <table>
                <tr>
                    <td> Driver Name</td>
                    <td>{driv?.name}</td>
                </tr>
                <tr>
                    <td> Profile</td>
                    <td>{driv?.profile}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{driv?.email}</td>
                </tr>
                <tr>
                    <td> Contact numer</td>
                    <td>{driv?.contact_number}</td>
                </tr>
                <tr>
                    <td>Vehicle Number</td>
                    <td>{driv?.vehicle.number}</td>
                </tr>
                {/* <tr>
                    <td>License</td>
                    <td>{driv?.license}</td>
                </tr> */}
                {/* <tr>
                    <td> Vehicle</td>
                    <td>{driv?.vehicle}</td>
                </tr> */}
                <tr>
                    <td> Documents</td>
                    <td>{driv?.documents}</td>
                </tr>

            </table>
            <button type='button' className='btn-btn-warning' onClick={handleEnable} >Enable</button>
             <br/>
             <br/>
            <button type='button' style={{backgroundColor:'#DC143C' , justifyContent: 'center'}} onClick={handleSuspend}>Suspend</button>
            
        </div>
    )
}

export default Accept

     