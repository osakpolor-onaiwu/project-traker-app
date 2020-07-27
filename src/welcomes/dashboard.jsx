import React from 'react'
import SideNav from '../layout/sidenav'
import CreateProject from '../project/createProject'
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import {NavLink} from 'react-router-dom'
import CarouselTutorial from './WelcomeCarousel'
import ChatAndChatNav from './chatandchatNav'

class Dashboard extends React.Component{
    render(){
    return (
        <div>
            <CarouselTutorial/>
        </div>
    )
    }
}

export default Dashboard
