import React from 'react'
import SideNav from '../layout/sidenav'
import CreateProject from '../project/createProject'
import Chat from '../welcomes/chat'
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import {NavLink} from 'react-router-dom'
import ChatSideNav from '../layout/chatSideNav'

class Dashboard extends React.Component{

    render(){
    return (
        <div>
            <div className='row'>
                <div className='col fixed l2 xl2 m4 white-text black darken sidenavi'>
                    <ChatSideNav/>
                </div>
                <div className='col right l10 xl10 '>
                    <Chat/>
                </div>
            </div>
        </div>
    )
    }
}

export default Dashboard
