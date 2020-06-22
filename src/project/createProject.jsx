import React from 'react'
import SideNav from '../layout/sidenav'
import ProjectForm from './projectForm'
const CreateProject=()=>{
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

export default CreateProject
