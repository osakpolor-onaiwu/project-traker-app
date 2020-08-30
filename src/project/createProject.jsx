import React from 'react'
import SideNav from '../layout/sidenav'
import ProjectForm from './projectForm'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const CreateProject=()=>{
    return(
    <div>
        <div className="row">
            <div className='col l2 hide-med-down'><SideNav/></div>
            <div className="col l10 s12 m12">
                <ProjectForm/>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps=(state)=>{
  return{
  }
}

export default connect(mapStateToProps)(CreateProject)
