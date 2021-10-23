import {useState, useEffect} from 'react'
import { useParams } from 'react-router';

const Profile = () => {
    const {id} = useParams()
    const [org, setOrg] = useState()
    useEffect(()=>{
        fetch('http://localhost:8000/organizations/'+id)
        .then(data => data.json())
        .then(data=> {
            setOrg(data)
            console.log(data)
        })
    }, [])

    const handleDelete = () => {
        fetch('http://localhost:8000/organizations/'+id, {
            method: 'DELETE'
        })
        .then(data => data.json())
        .then(data=> {
            setOrg(data)
            console.log(data)
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
                    <td> Address</td>
                    <td>{org?.address}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{org?.email}</td>
                </tr>
                <tr>
                    <td> Contact numer</td>
                    <td>{org?.contact_number}</td>
                </tr>
            </table>
            <button type='button' className='btn-btn-warning' onClick={handleDelete}>Suspend</button>
        </>
    )
}

export default Profile