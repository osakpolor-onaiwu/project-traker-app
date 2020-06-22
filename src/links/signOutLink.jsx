import React from 'react'
import {NavLink} from 'react-router-dom'

 const SignOutLink=()=> {
    return (
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signUp">Sign Up</NavLink></li>
        </ul>
    )
}

export default SignOutLink