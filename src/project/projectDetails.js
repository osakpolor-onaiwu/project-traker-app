import React, { Component } from 'react';
import SideNav from '../layout/sidenav'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class ProjectDetails extends Component {

  render() {
    const {project,auth}=this.props
    if (!auth.uid) {return<Redirect to='/login'/>}

    const eachProject=project.length?((project)=>{
      return(
        <div className=''>
          <table className="centered responsive-table section highlight white-text">
            <thead className='blue darken-4'>
              <tr>
                  <th colspan="3">{project.ProjectTitle}</th>
                  <th>{project.fullStartDate}</th>
                  <th>{project.fullEndDate}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colspan="5">
                <h5>Project Description</h5>
                <div>{project.Description}</div>
                </td>
              </tr>
              <tr>
                <td colspan="3">{project.Target1}</td>
                <td>{project.startdate1}</td>
                <td>{project.enddate1}</td>
              </tr>
              <tr>
                <td colspan="3">{project.Target2}</td>
                <td>{project.startdate2}</td>
                <td>{project.enddate2}</td>
              </tr>
              <tr>
                <td colspan="3">{project.Target3}</td>
                <td>{project.startdate3}</td>
                <td>{project.enddate3}</td>
              </tr>
              <tr>
                <td colspan="3">{project.Target4}</td>
                <td>{project.startdate4}</td>
                <td>{project.enddate4}</td>
              </tr>
              <tr>
                <td colspan="3">{project.Target5}</td>
                <td>{project.startdate5}</td>
                <td>{project.enddate5}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }):(
      <div>
        <p>no project</p>
      </div>
     )
    return (
      <div className='row'>
        <div className='col fixed l2 xl2 m4 white-text black darken sidenavi'>
        <SideNav/>
        </div>
        <div className='col right l10 '>
          {this.eachProject}
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state,ownprops)=>{
  const id=ownprops.match.params.projectDetails;
  const projects=state.firestore.data.projects;
  const project=projects? projects[id]:null
  //here we used a tenary operator and said if there are projects, then get us
  //the id of each projects and store that in project variable, but if no project
  //return null
  return{
    project:project,
    auth:state.firebase.auth
    // we then returned an object that assigns the particular project to project property
    //so we have mapped the state project, to the prop project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection:'projects'}
  ])
) (ProjectDetails)
