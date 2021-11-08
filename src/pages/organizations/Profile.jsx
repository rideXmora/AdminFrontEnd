import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
    const { id } = useParams()
    const [org, setOrg] = useState()
    const { customFetch } = useAuth()
    const history = useHistory()
    useEffect(() => {
        customFetch('/admin/orgAdmin/all')
            .then(data => {
                const filtered = data.find(item => item.phone === id)
                setOrg(filtered)
            })
    }, [])

    const handleSuspend = () => {
        customFetch('/admin/orgAdmin/suspend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: id,
                suspend: true
            })
        })
            .then(data => {
                history.push('/admin/organization')
            })
    }
    return (
        <>
            <h2>Profile</h2>
            <table>
                <tr>
                    <td> Organization Name</td>
                    <td>{org?.name}</td>
                </tr>
                <tr>
                    <td> Contact Number</td>
                    <td>{org?.phone}</td>
                </tr>
                <tr>
                    <td> Email</td>
                    <td>{org?.email}</td>
                </tr>
                <tr>
                    <td> Business Reg No</td>
                    <td>{org?.businessRegNo}</td>
                </tr>
                <tr>
                    <td> Based City</td>
                    <td>{org?.basedCity}</td>
                </tr>
                <tr>
                    <td> Address</td>
                    <td>{org?.address}</td>
                </tr>

            </table>
            <button type='button' className='btn-btn-warning' onClick={handleSuspend}>Suspend</button>

        </>
    )
}

export default Profile