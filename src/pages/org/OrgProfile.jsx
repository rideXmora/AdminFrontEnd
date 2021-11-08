import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';

function OrgProfile () {
    const {id} = useParams()
  const [org, setOrg] = useState()
  const [changePsw, setChangePsw] = useState(false)
  const {customFetch} = useAuth()

  const [data, setData] = useState({oldPassword: '', newPassword: ''})
    const [errors, setErrors] = useState({})

    useEffect(()=>{
        customFetch('/orgAdmin/profile')
        .then((data)=> {
            setOrg(data)
           
        
        })
    }, [])

     const handleChange = (e) => {
        setData(data=>({...data, [e.target.name]: e.target.value}))
        setErrors(error=>({...errors, [e.target.name]: ''}))
    }

    const validate = () => {
        let errors = {};

         let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
   
        if (!strongPassword.test(data.newPassword)) errors.newPassword = 'password must be strong.';
        if (data.newPassword === '') errors.newPassword = 'Password must be valid.';
        
        setErrors(errors)
        
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        validate();
        if (Object.keys(errors).length === 0) {
            console.log(data);
            customFetch('/orgAdmin/changePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(data=>{
                console.log(data)
                setChangePsw(false)
                // setState(getInitialState());
            })
        }
  
    }

    return(
        
        <div>
            <div><h2>Profile</h2></div>
           <table>
                <tr>
                    <td>  Name</td>
                    <td>{org?.name}</td>
                </tr>
                <tr>
                    <td> Contact Number</td>
                    <td>{org?.phone}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{org?.email}</td>
                </tr>
                <tr>
                    <td> Business Reg No</td>
                    <td>{org?.businessRegNo}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{org?.address}</td>
                </tr>
                <tr>
                    <td> Total Income</td>
                    <td>{org?.totalIncome}</td>
                </tr>
                <tr>
                    <td>{org?.payments[0].vehicleType} </td>
                    <td>RatePerMeter:{org?.payments[0].ratePerMeter}, RateWaitingForMin:{org?.payments[0].rateWaitingPerMin} , Discount:{org?.payments[0].discount}</td>
                </tr>
                <tr>
                    <td>{org?.payments[1].vehicleType} </td>
                    <td>RatePerMeter:{org?.payments[1].ratePerMeter}, RateWaitingForMin:{org?.payments[1].rateWaitingPerMin} , Discount:{org?.payments[1].discount}</td>
                </tr>
                <tr>
                    <td>{org?.payments[2].vehicleType} </td>
                    <td>RatePerMeter:{org?.payments[2].ratePerMeter}, RateWaitingForMin:{org?.payments[2].rateWaitingPerMin} , Discount:{org?.payments[2].discount}</td>
                </tr>
              
            </table>
            <Button type="button" style={{backgroundColor:"#5c8d89"}} onClick={()=>setChangePsw(!changePsw)}><b>Change Password</b></Button>
            {changePsw&&
            <>
            <div><h2>Change password</h2></div>
            <Form className="container" onSubmit={handleSubmit}>
              
                <FormGroup className="form">
                    <Label for="oldPassword">Old password</Label>
                    <Input id="oldPassword" type="password" value={data.oldPassword} invalid={errors.oldPassword ? true : false} name="oldPassword" onChange={handleChange} />
                    <FormFeedback>{errors.oldPassword}</FormFeedback>
                </FormGroup>
                 
              
                <FormGroup className="form">
                    <Label for="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" value={data.newPassword} name="newPassword" invalid={errors.newPassword ? true : false} onChange={handleChange} />
                    <FormFeedback>{errors.newPassword}</FormFeedback>
                </FormGroup>

                <Button type="submit" style={{backgroundColor:"#5c8d89"}}><b>Register</b></Button>
            </Form>
            </>}
        </div>
    )
}

export default OrgProfile