import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

//import ThemeMenu from '../thememenu/ThemeMenu'


import user_image from '../../assets/images/tuat.png'

import user_menu from '../../assets/JsonData/user_menus.json'
import { useAuth } from '../../contexts/AuthContext'

const curr_user = {
    display_name: 'Overall Admin',
    image: user_image
}



const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (

    <Link style={{ color: "#262e2b" }} key={index} onClick={item.onClick}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    const { user, logout } = useAuth()
    curr_user.display_name = user.role === 'RIDEX_ADMIN' ? 'Overall Admin' : 'Organization Admin'
    return (
        <div className='topnav'>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={[{
                            "icon": "bx bx-log-out-circle bx-rotate-180",
                            "content": "Logout",
                            onClick: logout
                        }]}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>

                <div className="topnav__right-item">

                </div>
            </div>
        </div>
    )
}

export default Topnav
