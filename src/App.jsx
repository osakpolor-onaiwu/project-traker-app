import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
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
import Footer  from './layout/footer'


class App extends React.Component{
  componentDidMount(){
    this.props.loadUser()
  }
  render(){
  return (
   <BrowserRouter>
   <div>
     <Navbar/>
     <Switch>
       <Route exact path='/' component={CarouselTutorial}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/signUp' component={SignUp}/>
       <PrivateRoute exact path='/createChat' component={ChatAndChatNav}/>
       <PrivateRoute exact path='/dashboard' component={Dashboard}/>
       <PrivateRoute path='/createProject' component={CreateProject}/>
       <PrivateRoute  path='/project/:projectDetails' component={ProjectDetails}/> 
     </Switch>
    </div>
   </BrowserRouter> 
  )
}
}

const mapDispatchToProps=(dispatch)=>{
return{
  loadUser:()=>{dispatch(loadUser())},
  ChatActionGet:()=>{dispatch(ChatActionGet())}
}
}

export default connect(null,mapDispatchToProps)(App);
