import React, { useState } from 'react'
import { useHistory } from 'react-router'
import api from '../../services/api'
import { useAuth } from '../../contexts/AuthContext'

function Login()  {
    const [values, setValues] = useState({phone: '', password: ''})
    const {orgLogin} = useAuth()
    const history = useHistory()

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        api.login(values).then(({data})=>{
            console.log(data)
        })
        orgLogin(values).then(data=> {
            console.log(data)
            if (data.token) {
                history.push('/orgAdmin/dashboard')
                // if(data.payments) {
                //     history.push('/orgAdmin/dashboard')
                // } else {
                //     history.push('/orgAdmin/dashboard')
                // }
            } else {
                alert('Login failed')
            }
        }).catch(e=>{
            console.log(e)
            alert('Login error')
        })
    }
        return (
            <div className="me">
            <div className="card m-5">
  <div className="card-body">
      <h3>Organizational admin Sign In</h3>
            <form className="center"  onSubmit={handleSubmit}>
                

                 <div className="inputbox">
                    <label>Phone Number</label>
                    <input width="50%" type="text" name="phone" className="form-control"  value={values.phone} onChange={handleChange} />
                </div>

                <div className="inputbox">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control"  value={values.password} onChange={handleChange} />
                </div>

                <div className="inputbox">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="inputbox">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
</div>
</div>
</div>
               );
   
}
export default Login