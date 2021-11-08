import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Profile from './Profile';
import Ride from './Ride'
import { useAuth } from '../../../contexts/AuthContext';

function Prathees() {
    const { id, type } = useParams()
    const { customFetch } = useAuth()
    const [pas, setPas] = useState()
    useEffect(() => {
        customFetch('/admin/passenger/all')
            .then(data => {
                const filtered = data.find(item => item.phone === id)
                setPas(filtered)
                console.log(filtered)
            })
    }, [])
    return (
        <>
            <div>
                <ul>
                    <li className={type === "profile" ? "active" : ""} style={{ width: "50%" }}><Link to={'/orgAdmin/driver/profile/' + id}>Profile</Link></li>
                    <li className={type === "ride" ? "active" : ""} style={{ width: "50%" }}><Link to={'/orgAdmin/driver/ride/' + id}>Ride History</Link></li>
                </ul>
            </div>
            {
                (type === 'profile')
                    ? <Profile />
                    : <Ride />
            }
        </>
    )
}

export default Prathees

