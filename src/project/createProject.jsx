import React from 'react'
import SideNav from '../layout/sidenav'
import ProjectForm from './projectForm'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const CreateProject=({auth})=>{
  if (!auth.uid) {return<Redirect to='/login'/>}
    return(
    <div>
        <div className="row">
            <div className="col fixed l2 xl2 m4 white-text black darken-4">
                <SideNav/>
            </div>
            <div className="col l10 right">
                <ProjectForm/>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth
    // we then returned an object that assigns the particular project to project property
    //so we have mapped the state project, to the prop project
  }
}

export default connect(mapStateToProps)(CreateProject)
