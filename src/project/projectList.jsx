import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

const ProjectList=({projects})=>{
  const projectList=projects.length?(projects.map((project)=>{
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

const mapStateToProps = (state) =>{
    // console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects',orderBy:['createdAt','desc']},
        {collection:'notifications',orderBy:['time','desc'],limits:3, }
    ])
) (ProjectList)
