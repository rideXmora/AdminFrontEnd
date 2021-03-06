import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import "./Login.css";
function Login()  {
    const {login} = useAuth()
    const [values, setValues] = useState({phone: '', password: ''})
    const history = useHistory()

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(values).then(data=>{
            if (data.token) {
                history.push('/admin/dashboard')
            } else {
                alert(data.message)
            }
        }).catch(e=>{
            alert('Login failed')
        })
    }
        return (
            <div className="me">
            <div className="card m-5">
  <div className="card-body">
      <h3>Overall Admin Sign In</h3>
            <form className="center"  onSubmit={handleSubmit}>
                

                 <div className="inputbox">
                    <label>Phone Number</label>
                    <input width="50%" type="text" name="phone" className="form-control"  value={values.phone} onChange={handleChange} />
                </div>

                <div className="inputbox">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control"  value={values.password} onChange={handleChange} />
                </div>

               

                <button data-testid='serch-button' type="submit" className="inputbox">Submit</button>
               
              
            </form>

            <Link to={'/orgLogin'}>Login as Organization Admin?</Link>
</div>
</div>
</div>
               );
   
}
export default Login