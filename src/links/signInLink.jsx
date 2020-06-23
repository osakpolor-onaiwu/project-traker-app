import React from 'react'
import {NavLink} from 'react-router-dom'

 const SignInLink=()=> {
    return (
        <ul id="nav-mobile" class="right">
            <li><NavLink to="/createProject">Create Project</NavLink></li>
            <li><NavLink to="/chatandchatNav">Chat Room</NavLink></li>
            <li><NavLink to="/project/projectDetails">Log Out</NavLink></li>
            <li className='hide-on-med-and-down image'><NavLink to='/'><img src="/bag.jpg" heigt='20px' width='30px' alt="name" class="circle responsive-img"/> userName</NavLink></li>
        </ul>
    )
}

export default SignInLink
