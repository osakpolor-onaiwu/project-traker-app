import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from './layout/navbar'
import Dashboard from '../src/welcomes/dashboard';
import CarouselTutorial from './welcomes/WelcomeCarousel'
import Login from '../src/auth/login'
import SignUp from '../src/auth/signUp'
import ChatAndChatNav from './welcomes/chatandchatNav'
import CreateProject from './project/createProject';
import ProjectDetails from './project/projectDetails'

function App() {
  return (
   <BrowserRouter>
   <div>
     <Navbar/>
     <Switch>
       // <Route exact path='/' component={Dashboard}/>
       <Route  path='/login' component={Login}/>
       <Route  path='/signUp' component={SignUp}/>
       <Route path='/createProject' component={CreateProject}/>
       <Route exact path='/' component={CarouselTutorial}/>
       <Route path='/chatandchatNav' component={ChatAndChatNav}/>
       <Route  path='/project/:projectDetails' component={ProjectDetails}/>
     </Switch>
    </div>
   </BrowserRouter>
  )
}

export default App;
