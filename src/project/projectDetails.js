import React, { Component } from 'react';
import SideNav from '../layout/sidenav'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import ProjectTarget from './projectTarget'

class ProjectDetails extends Component {

  render() {
    const {project}=this.props
    const eachProject=project.length?(project.map((project)=>{
      return(
        <div>
          <table className="centered responsive-table section highlight white-text">
          <thead className='grey darken-4'>
              <tr className='white-text'>
                  <th colspan="3">Project Title</th>
                  <th>Start Date</th>
                  <th>End Date</th>
              </tr>
            </thead>

            <thead>
              <tr className='white-text'>
                  <th colspan="3">{project.ProjectTitle}</th>
                  <th>{project.Start}</th>
                  <th>{project.End}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colspan="5">
                <h5>Project Description</h5>
                <div>{project.Description}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    })):(
      <div className='white-text'>
        <p>no project</p>
      </div>
     )
    return (
      <div className='row'>
        <div className='col fixed l2 xl2 m4 white-text black darken sidenavi'>
        <SideNav/>
        </div>
        <div className='col right l10 '>
        <ProjectTarget project_id={project.id}/>
        {eachProject}
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state,ownprops)=>{
  const id=ownprops.match.params.projectDetails;
  console.log(state.project.projects)
  return{
    project:state.project.projects.filter((project)=>{
        return project.id==id
    })
  }
}

export default connect(mapStateToProps) (ProjectDetails)
