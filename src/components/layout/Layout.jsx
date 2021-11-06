import React, {useEffect} from 'react'

import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import {
    OverallRoutes,
    OrgRoutes
} from '../Routes'

import { BrowserRouter, Route, Switch, Redirect, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Login from '../../pages/Login'
import Login_org from '../../pages/org/Login_org'
import Front from '../../pages/Front'
import {useAuth} from '../../contexts/AuthContext'
import FareCalCont from '../../pages/FareCalConot'

const RouteHanlder = () => {
    const {type} = useParams()
    const {user} = useAuth()
    console.log(user)
    if (type==='orgAdmin') {
        if (user?.role === 'ORG_ADMIN') {
            if (user.payments) {
                return <OrgRoutes />
            } else {
                return <Redirect to="/fareCalculation" />
            }
        } 
        return <Redirect to="/orgLogin" />
    } else {
        if (user?.role === 'RIDEX_ADMIN') return <OverallRoutes />
        return <Redirect to="/login" />
    }
}

const Layout = () => {
    
   
    const dispatch = useDispatch()

    useEffect(() => {
      
    }, [dispatch])

    return (
        <BrowserRouter>
        <Switch>
            <Route path='/orgLogin'  component={Login_org}/>
            <Route path='/login'  component={Login}/>
            <Route path='/' exact  component={Front}/>
            <Route path='/fareCalculation' exact  component={FareCalCont}/>
            <Route render={(props) => (
                <div className={`layout  `}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Route path="/:type/" component={RouteHanlder}/>
                        </div>
                    </div>
                </div>
            )}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Layout
