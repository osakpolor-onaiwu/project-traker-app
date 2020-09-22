import React from 'react'
import SideNav from '../layout/sidenav'
import ProjectForm from './projectForm'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize'
import SideNavPhone from '../layout/sidenavphone'
import Footer  from '../layout/footer'


class CreateProject extends React.Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instance = M.Tabs.init(elems, {})
          });
    }

    render(){
        const {project}=this.props

        return(
            <div>
                <div class="row down  hide-on-large-only ">
                    <div style={{}} id="create" class="col m12 s12 container">
                         <ProjectForm/>
                    </div>
                    <div id="project" style={{marginTop:'10px'}} class="container col m12 s12">
                        <SideNavPhone/>
                    </div>

                </div>

                <div className="row hide-on-med-and-down">
                    <div className='col l2 fixed  black'><SideNav/></div>

                    <div className="col container l10 xl10 right">
                        <div className='row' >
                        <ProjectForm/>
                        </div>
                        <Footer/>
                    </div>
                    
                </div>
                
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

export default connect(mapStateToProps)(CreateProject)
