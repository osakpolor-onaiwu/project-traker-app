import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import './ant.css'
import Navbar from './layout/navbar'
import Dashboard from '../src/welcomes/dashboard';
import CarouselTutorial from './welcomes/WelcomeCarousel'
import Login from '../src/auth/login'
import SignUp from '../src/auth/signUp'
import ChatAndChatNav from './welcomes/createChat'
import CreateProject from './project/createProject';
import ProjectDetails from './project/projectDetails'
import loadUser from './actions/loadUserAction'
import ChatActionGet from './actions/chatActionGet'
import PrivateRoute from './welcomes/privatRoute'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Projects from './project/projects'
import   ProjectActionGet from './actions/projectAction2'
import TargetActionGet from './actions/targetGet'



class App extends React.Component{
  componentDidMount(){
    this.props.loadUser()
    this.props.ChatActionGet()
  }
  render(){
  return (
   <HashRouter>
   <div>
     <Navbar/>
     <Switch>
       <Route exact path='/' component={CarouselTutorial}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/signUp' component={SignUp}/>
       <PrivateRoute exact path='/createChat' component={ChatAndChatNav}/>
       <PrivateRoute exact path='/dashboard' component={Dashboard}/>
       <PrivateRoute path='/createProject' component={CreateProject}/>
       <PrivateRoute path='/projects' component={Projects}/>
       <PrivateRoute  path='/project/:projectDetails' component={ProjectDetails}/> 
     </Switch>
    </div>
   </HashRouter> 
  )
}
}

const mapDispatchToProps=(dispatch)=>{
return{
  loadUser:()=>{dispatch(loadUser())},
  ChatActionGet:()=>{dispatch(ChatActionGet())},
  ProjectActionGet:()=>{dispatch(ProjectActionGet())},
  TargetActionGet: () => {
    dispatch(TargetActionGet());
},
}
}

export default connect(null,mapDispatchToProps)(App);
