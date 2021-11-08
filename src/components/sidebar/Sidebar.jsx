import React from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import sidebar_org_items from '../../assets/JsonData/sidebar_routes_org.json'
import { useAuth } from '../../contexts/AuthContext'

const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = props => {
    const { user } = useAuth()
    const currentMenus = user.role === 'RIDEX_ADMIN' ? sidebar_items : sidebar_org_items
    const activeItem = currentMenus.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                currentMenus.map((item, index) => (
                    <Link style={{ color: "#262e2b", textDecoration: "none" }} to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
