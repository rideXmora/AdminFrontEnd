import React, { useState } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { auto } from 'async';
import { useAuth } from '../../contexts/AuthContext';

const initialData = {
            ratePerMeter: '',
            rateWaitingPerMin: '',
            discount: ''
        }

const FareCalculation =  () => {
    const [threeData, setThreeData] = useState({...initialData, vehicleType: 'THREE_WHEELER'})
    const [carData, setCarData] = useState({...initialData, vehicleType: 'THREE_WHEELER'})
    const [bikeData, setBikeData] = useState({...initialData, vehicleType: 'THREE_WHEELER'})
    const [threeErrors, setThreeErrors] = useState({})
    const [carErrors, setCarErrors] = useState({})
    const [bikeErrors, setBikeErrors] = useState({})
    const {customFetch} = useAuth()

    const handleThreeChange = (e) => {
        setThreeData(data=>({...data, [e.target.name]: e.target.value}))
        setErrors(error=>({...errors, [e.target.name]: ''}))
    }

    const validate = () => {
        // Three wheeler validation
        let threeErrors = {};
        if (threeData.ratePerMeter === '') threeErrors.ratePerMeter = 'Rate Per Meter can not be blank.';
        if (threeData.rateWaitingPerMin === '') threeErrors.rateWaitingPerMin = 'Rate Waiting Per Minute can not be blank.';
        if (threeData.discount === '') threeErrors.discount = 'Discount can not be blank.';
        setThreeErrors(threeErrors)

        // Three wheeler validation
        let threeErrors = {};
        if (threeData.ratePerMeter === '') threeErrors.ratePerMeter = 'Rate Per Meter can not be blank.';
        if (threeData.rateWaitingPerMin === '') threeErrors.rateWaitingPerMin = 'Rate Waiting Per Minute can not be blank.';
        if (threeData.discount === '') threeErrors.discount = 'Discount can not be blank.';
        setThreeErrors(threeErrors)
        
        return nul;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            alert('Suceesfully added the details of the fare calculation process')
            //Call an api here
            //Resetting the form
            customFetch('/orgAdmin/setPayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([threeData, carData, bikeData])
            })
            .then(data=>{
                console.log(data)
                // setState(getInitialState());
            })
        }
    }
        return (
            <>
            <h2 style={{marginTop:auto , padding:auto}}>Fare Calculation</h2>
            <br></br>
            <Form className="container" onSubmit={handleSubmit}>
              <div className="vehicle">
                   <h2 >Three Wheeler Fare</h2>
                <FormGroup className="form">
                    <Label for="ratePerMeter">Rate Per Meter</Label>
                    <Input id="ratePerMeter" type="number" value={threeData.ratePerMeter} invalid={threeErrors.ratePerMeter ? true : false} name="ratePerMeter" onChange={handleThreeChange} />
                    <FormFeedback>{threeErrors.ratePerMeter}</FormFeedback>
                </FormGroup>
                 
               <FormGroup className="form">
                    <Label for="rateWaitingPerMin">Rate Waiting Per Minute</Label>
                    <Input id="rateWaitingPerMin" type="number" value={threeData.rateWaitingPerMin} invalid={threeErrors.rateWaitingPerMin ? true : false} name="rateWaitingPerMin" onChange={handleThreeChange} />
                    <FormFeedback>{threeErrors.rateWaitingPerMin}</FormFeedback>
                </FormGroup>

                 <FormGroup className="form">
                    <Label for="discount">Discount</Label>
                    <Input id="discount" type="text" value={threeData.discount} invalid={threeErrors.discount ? true : false} name="discount" onChange={handleThreeChange} />
                    <FormFeedback>{threeErrors.discount}</FormFeedback>
                </FormGroup>
              </div>
              
              <div className="vehicle">
                   <h2 >Three Wheeler Fare</h2>
                <FormGroup className="form">
                    <Label for="ratePerMeter">Rate Per Meter</Label>
                    <Input id="ratePerMeter" type="number" value={threeData.ratePerMeter} invalid={threeErrors.ratePerMeter ? true : false} name="ratePerMeter" onChange={handleThreeChange} />
                    <FormFeedback>{threeErrors.ratePerMeter}</FormFeedback>
                </FormGroup>
                 
               <FormGroup className="form">
                    <Label for="rateWaitingPerMin">Rate Waiting Per Minute</Label>
                    <Input id="rateWaitingPerMin" type="number" value={threeData.rateWaitingPerMin} invalid={threeErrors.rateWaitingPerMin ? true : false} name="rateWaitingPerMin" onChange={handleThreeChange} />
                    <FormFeedback>{threeErrors.rateWaitingPerMin}</FormFeedback>
                </FormGroup>

                 <FormGroup className="form">
                    <Label for="discount">Discount</Label>
                    <Input id="discount" type="text" value={threeData.discount} invalid={threeErrors.discount ? true : false} name="discount" onChange={handleThreeChange} />
                    <FormFeedback>{threeErrors.discount}</FormFeedback>
                </FormGroup>
              </div>
              

             <Button type="submit" style={{backgroundColor:"#5c8d89"}}><b>Register</b></Button>
            </Form>
            </>
        );
}

export default FareCalculation;





/* import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { auto } from 'async';
class FareCalculation extends Component {
    
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
           
            ratePerMeter : '',
            rateWaitingPerMin: '',
            discount: ''
        },
        errors: {}
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};
        if (data.ratePerMeter === '') errors.ratePerMeter = 'RatePErMeter cannot be blank..';
        if (data.rateWaitingPerMin === '') errors.rateWaitingPerMin = 'RateWiyngPerMinute cannot be blank..';
        if (data.discount === '') errors.discount = 'Discount cannot be blank.';
    
        
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;
        return (
            <>
            <h2 style={{marginTop:auto , padding:auto}}>Register Organizations</h2>
            <br></br>
            <Form className="container" onSubmit={this.handleSubmit}>
              
                <FormGroup className="form">
                    <Label for="ratePerMeter">Rate Per Meter</Label>
                    <Input id="ratePerMeter" type="number" value={data.ratePerMeter} invalid={errors.ratePerMeter ? true : false} name="ratePerMeter" onChange={this.handleChange} />
                    <FormFeedback>{errors.ratePerMeter}</FormFeedback>
                </FormGroup>
                 
               <FormGroup className="form">
                    <Label for="rateWaitingPerMin">Rate Waiting Per Meter</Label>
                    <Input id="rateWaitingPerMin" type="number" value={data.rateWaitingPerMin} invalid={errors.rateWaitingPerMin ? true : false} name="rateWaitingPerMin" onChange={this.handleChange} />
                    <FormFeedback>{errors.rateWaitingPerMin}</FormFeedback>
                </FormGroup>

                 <FormGroup className="form">
                    <Label for="discount">Discount</Label>
                    <Input id="discount" type="text" value={data.discount} invalid={errors.discount ? true : false} name="discount" onChange={this.handleChange} />
                    <FormFeedback>{errors.discount}</FormFeedback>
                </FormGroup>
            
                <Button type="submit" style={{backgroundColor:"#5c8d89"}}><b>setPayment</b></Button>
            </Form>
            </>
        );
    }
}

export default FareCalculation; */