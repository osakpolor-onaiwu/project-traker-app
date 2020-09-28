import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios';

class DashboardSide extends React.Component{
   
    render(){
    const {project,auth}=this.props
    const projectList=project.length?(project.map((project)=>{
        return(
        <div>
        <NavLink to={'/project/'+ project.id}  className='padding white-text'>
        <li className='sideli truncate' key={project.id}>
        <i className="fa fa-folder-open"></i> {project.ProjectTitle}
        </li>
        </NavLink>
        </div>
        )
    })):(
        <div>
        <p>No projects</p>
        </div>
    )

    const chatList=auth.length?(auth.map((auth)=>{
        return(
        <div>
        <NavLink to={'/project/'+ auth.id}  className='padding white-text'>
        <li className='sideli' key={auth.id}>
        <i className="fa fa-folder-open"></i>
        {auth.username}
        </li>
        </NavLink>
        </div>
        )
    })):(
        <div>
        <p>{auth.username}</p>
        </div>
    )
    return(
        <div className='sidenavi black'>
            
            <ul className="truncate  white-text sideul">
            <h6 className='center white-text'>Projects</h6>
              {projectList}
              <li><div class="divider"></div></li>
              <h6 className='center white-text'>Chats</h6>
              {chatList}
            </ul>
        </div>
    )
}
}

const mapStateToProps=(state,ownprops)=>{
    console.log(state.project.projects)
    return{
      project:state.project.projects,
      chats:state.chat.chat,
      auth:state.auth.user
    }
  }



export default connect(mapStateToProps)(DashboardSide)
