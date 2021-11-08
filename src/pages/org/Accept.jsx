 
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'
import { Button } from 'reactstrap';

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
                    <td> Contact Number</td>
                    <td>{driv?.phone}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{driv?.email}</td>
                </tr>
                <tr>
                    <td> City</td>
                    <td>{driv?.city}</td>
                </tr>
                <tr>
                    <td>Vehicle Number</td>
                    <td>{driv?.vehicle.number}</td>
                </tr>
                <tr>
                    <td>Driving License</td>
                    <td>
                        <img style={{width: 100}} src={driv?.drivingLicense} alt="No img" />
                    </td>
                </tr>
                <tr>
                    <td> Vehicle Type</td>
                    <td>{driv?.vehicle.vehicleType}</td>
                </tr>
                <tr>
                    <td> Model</td>
                    <td>{driv?.vehicle.model}</td>
                </tr>
                <tr>
                    <td> License </td>
                    <td>
                        <img style={{width: 100}} src={driv?.vehicle?.license} alt="No img" />
                    </td>
                </tr>
                <tr>
                    <td> Vehicle Type</td>
                    <td>
                        <img style={{width: 100}} src={driv?.vehicle?.insurance} alt="No img" />
                    </td>
                </tr>
                <tr>
                    <td> Vehicle Reg</td>
                    <td>
                        <img style={{width: 100}} src={driv?.vehicle?.vehicleRegNo} alt="No img" />
                    </td>
                </tr>

            </table>
            
            <Button type='button' className='btn-btn-warning' onClick={handleEnable} >Enable</Button>
             <br/>
             <br/>
            <Button type='button' style={{backgroundColor:'#DC143C' , justifyContent: 'center'}} onClick={handleSuspend}>Suspend</Button>
            
        </div>
    )
}

export default Accept

     