import React from 'react'
import SideNav from '../layout/sidenav'
import CreateProject from '../project/createProject'
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import {NavLink} from 'react-router-dom'
import ChatAndChatNav from './createChat'
import {connect} from 'react-redux'
import ProjectActionGet from '../actions/projectAction2'
import ChatActionGet from '../actions/chatActionGet'
import DashboardSide from '../layout/dashboardSide'
import Footer  from '../layout/footer'


class Dashboard extends React.Component{
    componentDidMount(){
      this.props.ProjectActionGet()
      this.props.ChatActionGet()
    }
    render(){
        const {chat,projects,auth}=this.props
    return (
        <div className='row '>
            <div className='col black sidenavi fixed l2 hide-on-med-and-down'>
                <DashboardSide/>
            </div>
            <div className='container right col s12 m12 l10'>
                <div className='row'>
                    <div className='col hide-on-small-only m6 l6 xl6'>
                        <div style={{height:'420px'}} className="card mainslide">
                                    <span className="card-title mainslide-text white-text">Card Title</span>
                        </div>
                    </div>

                    <div className='col s12 m6 l6'>
                        <div className="row">

                            <div  className="col  s6 m6 darken-3 l6 xl6"> 
                                <div className="card">
                                    <div className="card-image">
                                        <NavLink to='/createProject'>
                                        <img  src="/project2.jpg" className="img-responsive dashcard"/>
                                        <span className="card-title">Create project</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div  className=" col  s6 m6  l6 xl6">
                                <div className="card">
                                    <div className="card-image">
                                        <NavLink to='/createChat'>
                                        <img  src="/chat.jpg" className="img-responsive dashcard"/>
                                        <span className="card-title">Chat</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className=" col s6 m6 l6 xl6">
                                <div className="card">
                                    <div className="card-image">
                                        <NavLink to='/groups'>
                                        <img  src="/discuss.jpg" className="img-responsive dashcard"/>
                                        <span className="card-title">Groups</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                
                            <div  className="  col  s6 m6  l6 xl6">
                                <div className="card">
                                    <div className="card-image">
                                        <NavLink to='/projects'>
                                        <img  src="/projecta.jpg" className="img-responsive dashcard"/>
                                        <span className="card-title">View Projects</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>

                <div className='row'>
                    <div className='col s12 m12 l6'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius porro autem commodi, 
                        modi recusandae unde voluptate, non rem repudiandae beatae ipsa blanditiis adipisci eligendi, 
                        quod id assumenda excepturi pariatur iste!</p>
                    </div>

                    <div className='col s12 m12 l6'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Omnis reprehenderit aut quas voluptate eaque dolore, totam voluptatum soluta fuga, 
                        id quia dolores sint ipsa at obcaecati necessitatibus fugit, quaerat optio.</p>
                    </div>
                    <div className='col s12 m12 l12 xl12'>
                    <Footer/>
                    </div>
                    
                </div>

               
            
            </div>
        </div>
    )
    }
}

const mapStateToProps=(state)=>({
    chat:state.chat.chat,
    projects:state.project.projects,
    auth:state.auth.user
})
const mapDispatchToProps =(dispatch)=> {
    return{
      ProjectActionGet:()=>{dispatch(ProjectActionGet())},
      ChatActionGet:()=>{dispatch(ChatActionGet())}
    }
   }

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
