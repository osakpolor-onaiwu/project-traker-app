import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from './layout/navbar'
import Dashboard from '../src/welcomes/dashboard';
import Login from '../src/auth/login'
import SignUp from '../src/auth/signUp'
import CreateProject from './project/createProject';
import Chat  from './welcomes/chat';

function App() {
  return (
   <BrowserRouter>
   <div>
     <Navbar/>
     <Switch>
       <Route exact path='/' component={Dashboard}/>
       <Route  path='/login' component={Login}/>
       <Route  path='/signUp' component={SignUp}/>
       <Route path='/createProject' component={CreateProject}/>
       <Route  path='/chat' component={Chat}/>
       {/* <Route  path=':/project/project_id' component={}/> */}
     </Switch>
    </div>
   </BrowserRouter>
  )
}

export default App;
