import React from 'react'
import {NavLink} from 'react-router-dom'

 const SignOutLink=()=> {
    return (
        <ul>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signUp">Sign Up</NavLink></li>
        </ul>
    )
}

export default SignOutLink