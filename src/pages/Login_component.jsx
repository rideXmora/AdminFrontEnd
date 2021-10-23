import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

import { ButtonGroupProps } from 'reactstrap';
import Login from './Login';
import Login_org from './org/Login_org';

function Login_component() {
        const {type} = useParams()
  

  
    
    return (
        <>
        <div>
        <ul>
                            <li style={{width:"25%"}}><Link class="active" to={'/login' }>Overall admin login</Link></li>
                            <li style={{width:"25%"}}><Link  to={'/login_org' }>Organizational admin login</Link></li>
           </ul>                 
    </div>
         {
                ( type==='login' )
                ? <Login />
              
               : <Login_org />
            }
            </>
    )
}

export default Login_component
