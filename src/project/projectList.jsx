import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios';

class ProjectList extends React.Component{
   
    render(){
    const {project}=this.props
    const projectList=project.length?(project.map((project)=>{
        return(
        <div>
        <NavLink to={'/project/'+ project.id}  className='padding white-text'>
        <li className='sideli' key={project.id}>
        <i className="fa fa-folder-open"></i>
        {project.ProjectTitle}
        </li>
        </NavLink>
        </div>
        )
    })):(
        <div>
        <p>No projects</p>
        </div>
    )
    return(
        <div className='sidenavi'>
            <h6 className='center white-text'>Projects</h6>
            <ul className="  white-text sideul">
              {projectList}
            </ul>
        </div>
    )
}
}

const mapStateToProps=(state,ownprops)=>{
    console.log(state.project.projects)
    return{
      project:state.project.projects
    }
  }



export default connect(mapStateToProps)(ProjectList)
