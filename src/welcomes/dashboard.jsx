import React from 'react'
import SideNav from '../layout/sidenav'
import CreateProject from '../project/createProject'
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import {NavLink} from 'react-router-dom'
import CarouselTutorial from './WelcomeCarousel'
import ChatAndChatNav from './chatandchatNav'
import {connect} from 'react-redux'
import ProjectActionGet from '../actions/projectAction2'

class Dashboard extends React.Component{
    componentDidMount(){
        this.props.ProjectAction()
    }
    render(){
    return (
        <div className='container'>
         <div className='white-text'>home page</div>
        </div>
    )
    }
}

const mapDispatchToProps =(dispatch)=> {
    return{
      ProjectAction:()=>{dispatch(ProjectActionGet())}
    }
   }

export default connect(null,mapDispatchToProps)(Dashboard)
