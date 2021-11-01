import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Dashboard_org from '../pages/org/Dashboard_org'

import Organization from '../pages/Organization'
import Register from '../pages/Register'

import Passenger from '../pages/Passenger'
import Prathees from '../pages/Prathees'
import Yogo from '../pages/Yogo'
import Complain from '../pages/Complain'
import DriverProfile from '../pages/DriverProfile'
import AdminRegister from '../pages/AdminRegister'
import Login_component from '../pages/Login_component'
import Complain_org from '../pages/org/Complain_org'
import Driver_org from '../pages/org/Driver_org'
import DriverRegistration from '../pages/org/DriverRegistration'
import Accept from '../pages/org/Accept'
import Fare from '../pages/org/Fare'
import Profile from '../pages/org/Profile'
import Past from '../pages/org/Past'


const OverallRoutes = () => {
    return (
        <Switch>
            <Route path='/admin/dashboard' exact component={Dashboard}/>
             
            
            <Route path='/admin/organization' exact component={Organization}/>
            <Route path='/admin/Register' component={Register}/>
             <Route path='/admin/adminRegister' component= {AdminRegister}/>
          
             <Route path='/admin/passenger' exact component={Passenger}/>
             
             <Route path='/admin/organization/:type/:id' component={Yogo}/>
              <Route path='/admin/passenger/:type/:id' component={Prathees}/>
               <Route path='/admin/complain' component={Complain}/>
              
                <Route path='/admin/driver/:type/:id' component={DriverProfile}/>
                    <Route path='/admin/type' component={Login_component}/>   
        </Switch>
    )
}

const OrgRoutes = () => {
    return (
        <Switch>
                <Route path='/orgAdmin/dashboard' component={Dashboard_org}/>
                <Route path='/orgAdmin/complain'  component={Complain_org}/>
                <Route path='/orgAdmin/driver' exact component={Driver_org}/>
                 <Route path='/orgAdmin/pastRides'  component={Past}/>
                <Route path='/orgAdmin/fareCalculation'  component={Fare}/> 
                <Route path='/orgAdmin/driverRegister' exact  component={DriverRegistration}/>
                <Route path='/orgAdmin/driverRegister/accept/:id'  component={Accept}/>
                <Route path='/orgAdmin/driver/profile/:id'  component={Profile}/>
        </Switch>
    )
}

export {
    OverallRoutes,
    OrgRoutes
}
