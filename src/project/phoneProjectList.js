import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios';
import Footer from '../layout/footer'
class PhoneProjectList extends React.Component{
   
    render(){
    const {project}=this.props
    const PhoneProjectList=project.length?(project.map((project)=>{
        return(
        <div className='black'>
        <NavLink to={'/project/'+ project.id}  className='padding white-text'>
        <li className='sideli' key={project.id}>
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
        <div className='sidenavi '>
            <ul className=" black white-text sideul">
            <h6 style={{marginTop:'15px'}} className='center white-text'>Projects</h6>
            <li><div class="divider"></div></li>
              {PhoneProjectList}
            </ul>
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



export default connect(mapStateToProps)(PhoneProjectList)
