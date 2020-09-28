import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios';
import Footer from '../layout/footer'

class Projects extends React.Component{
   
    render(){
    const {project}=this.props
    const projectList=project.length?(project.map((project)=>{
        return(
        <div>
        <NavLink to={'/project/'+ project.id}  className='padding white-text'>
        <li className='' key={project.id}>
        <i className="fa fa-folder-open"></i>
        {project.ProjectTitle}
        </li>
        <li><div class="divider"></div></li>
        </NavLink>
        </div>
        )
    })):(
        <div>
        <p>No projects</p>
        </div>
    )
    return(
      <div className='projects'>
        <div  className='teal darken-4 row projects container'>
            <div class="divider"></div>
            <h3 className='center white-text'>Projects</h3>
            <ul style={{padding:'10px'}} className=" teal darken-4 white-text sideul">
              {projectList}
            </ul>
        </div>
        <Footer/>
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



export default connect(mapStateToProps)(Projects)
