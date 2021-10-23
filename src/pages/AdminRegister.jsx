import React, { useState } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import "./Register.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { auto } from 'async';
import { useAuth } from '../contexts/AuthContext';

const initialData = {
            phone: '',
            password: '',
        }

const AdminRegister =  () => {
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
         let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
      
        
        if (data.phone === '') errors.phone = 'Contact Number can not be blank.';
        if (!pattern.test(data.phone)) errors.phone = 'Contact Number must be valid.';
   
        if (!strongPassword.test(data.password)) errors.password = 'password must be strong.';
        if (data.password === '') errors.password = 'Password must be valid.';
        
        setErrors(errors)
        
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            alert('Succesfully registerd admin')
            //Call an api here
            //Resetting the form
            customFetch('/admin/register/admin', {
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
            <h2 style={{marginTop:auto , padding:auto}}>Register Organizations</h2>
            <br></br>
            <Form className="container" onSubmit={handleSubmit}>
              
                <FormGroup className="form">
                    <Label for="phone">Contact Number</Label>
                    <Input id="phone" type="text" value={data.phone} invalid={errors.phone ? true : false} name="phone" onChange={handleChange} />
                    <FormFeedback>{errors.phone}</FormFeedback>
                </FormGroup>
                 
              
                <FormGroup className="form">
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={handleChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

            

                

                <Button type="submit" style={{backgroundColor:"#5c8d89"}}><b>Register</b></Button>
            </Form>
            </>
        );
}

export default AdminRegister;