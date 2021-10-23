import React, { useState, useEffect } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import "./Register.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { auto } from 'async';
import { useAuth } from '../contexts/AuthContext';

const initialData = {
            name: '',
            phone: '',
            address:'',
            email: '',
            businessRegNo:'',
            basedCity:'',
           
        }

const  Register = () => {
    const [data, setData] = useState(initialData)
    const [errors, setErrors] = useState({})
    const {customFetch} = useAuth()

    const handleChange = (e) => {
        setData(data=>({...data, [e.target.name]: e.target.value}))
        setErrors(error=>({...errors, [e.target.name]: ''}))
    }

    const validate = () => {
        let errors = {};
         
         let pattern = new RegExp ( "^(?:0|94|\\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\\d)\\d{6}$" ) ;
       
        if (data.name === '') errors.name = ' Name can not be blank.';
         if (data.address === '') errors.address = ' address can not be blank.';
        if (data.phone === '') errors.phone = 'Contact Number can not be blank.';
        if (!pattern.test(data.phone)) errors.phone = 'Contact Number must be valid.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
         if (data.businessRegNo === '') errors.businessRegNo = ' BusinessRegNo can not be blank.';
          if (data.basedCity === '') errors.basedCity = ' Based city can not be blank.';
        setErrors(errors)
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        validate();
        if (Object.keys(errors).length === 0) {
            console.log(data);
            alert('Succesfully registered organization');
            customFetch('/admin/register/orgAdmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(data=>{
                console.log(data)
                // setState(getInitialState());
            })
        }
  
    }
        return (
            <>
            <h2 style={{marginTop: 'auto' , padding: 'auto'}}>Register Organizations</h2>
            <br></br>
            <Form className="container" onSubmit={handleSubmit}>
                <FormGroup className="form">
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" value={data.name} invalid={errors.name ? true : false} name="name" onChange={handleChange} />
                    <FormFeedback>{errors.name}</FormFeedback>
                </FormGroup>
                <FormGroup className="form">
                    <Label for="email">Email</Label>
                    <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={handleChange} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <FormGroup className="form">
                    <Label for="phone">Contact Number</Label>
                    <Input id="phone" type="text" value={data.phone} invalid={errors.phone ? true : false} name="phone" onChange={handleChange} />
                    <FormFeedback>{errors.phone}</FormFeedback>
                </FormGroup> 
                <FormGroup className="form">
                    <Label for="businessRegNo">Business Reg No</Label>
                    <Input id="businessRegNo" type="businessRegNo" value={data.businessRegNo} type="text" name="businessRegNo" invalid={errors.businessRegNo ? true : false} onChange={handleChange} />
                    <FormFeedback>{errors.businessRegNo}</FormFeedback>
                </FormGroup>

                <FormGroup className="form">
                    <Label for="basedCity"> Based City</Label>
                    <Input id="basedCity" value={data.basedCity} type="text" name="basedCity" invalid={errors.basedCity ? true : false} onChange={handleChange} />
                    <FormFeedback>{errors.basedCity}</FormFeedback>
                </FormGroup>
                <FormGroup className="form">
                    <Label for="address">address</Label>
                    <Input id="addess" type="text" value={data.address} invalid={errors.address ? true : false} name="address" onChange={handleChange} />
                    <FormFeedback>{errors.address}</FormFeedback>
                </FormGroup>

                <Button type="submit" style={{backgroundColor:"#5c8d89"}}><b>Register</b></Button>
            </Form>
            </>
        );
}

export default Register;