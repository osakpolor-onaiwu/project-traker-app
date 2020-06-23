import React from 'react'
import {NavLink} from 'react-router-dom'

const ChatSideNav=()=>{
    return(
            <div className='sidenavi '>
                <h6 className='center white-text'>Members</h6>
                <ul className="  white-text sideul">
                <li className='sideli'>
                <i className="fa fa-user"></i>
                <NavLink to='/projectDetai' className='padding white-text'>User Name</NavLink>
                </li>
                <li className='sideli'>
                <i className="fa fa-user "></i>
                <NavLink to='/projectDetails' className='padding white-text'>User Name</NavLink>
                </li>
                </ul>
            </div>
    )
}

export default ChatSideNav
