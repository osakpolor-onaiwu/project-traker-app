import React from 'react'
import {NavLink} from 'react-router-dom'

const SideNav=()=>{
    return(
        <div className='sidenavi'>
            <h6 className='center white-text'>Projects</h6>
            <ul className="  white-text sideul">
            <li className='sideli'><i className=" material-icons">assignment</i> <NavLink to='/projectDetails' className='padding white-text'>Project Title</NavLink></li>
            </ul>
        </div>
    )
}

export default SideNav
