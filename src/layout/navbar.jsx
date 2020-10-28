import React from 'react'
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import {NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SignOut from '../actions/signOutAction'

class Navbar extends React.Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {constrainWidth:false,alignment:"left",coverTrigger:false});
          });

    }

    render(){
        const {isAuthenticated,user}=this.props.auth
     
        const existingUser=(
            <ul class=" hide-on-med-and-down right">
                <li>{user?`${user.username}`:" "}</li>
                <li><NavLink to="/createProject">Create project</NavLink></li>
                <li><NavLink to="/createChat">Chat</NavLink></li>
                <li><NavLink to='#' className='white-text' onClick={this.props.Logout}>Logout</NavLink></li>
            </ul>
        );

        const newUser=(
            <ul class=" hide-on-med-and-down right">
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signUp">SignUp</NavLink></li>
            </ul>
        )
        const existingUser2=(
            <ul class=" black white-text">
                <li class="divider" tabIndex="-1"></li>
                <li><NavLink to="/createProject" className='white-text'>Create project</NavLink></li>
                <li class="divider" tabIndex="-1"></li>
                <li><NavLink to="/createChat" className='white-text'>Chat</NavLink></li>
                <li class="divider" tabIndex="-1"></li>
                <li><NavLink to="/projects" className='white-text'>View Projects</NavLink></li>
                <li class="divider" tabIndex="-1"></li>
                <li><NavLink to='#' className='white-text' onClick={this.props.Logout}>Logout</NavLink></li>
            </ul>
        );

        const newUser2=(
            <ul class=" black white-text">
                <li><Link to="/login" className='white-text'>Login</Link></li>
                <li class="divider" tabIndex="-1"></li>
                <li><Link to="/signUp" className='white-text'>SignUp</Link></li>
            </ul>
        )



        return(
            <div className='navbar-fixed  '>
                <nav className='black' >
                    <div class="nav-wrapper container">
                    
                    <Link to="/dashboard" class="brand-logo hide-on-med-and-down">ProjectP</Link>
                    <Link to="/dashboard" class="brand-logo center hide-on-large-only">ProjectP</Link>
                    <a href="#" class='dropdown-trigger hide-on-large-only' data-target='dropdown1' >
                        <i class="material-icons">menu</i>
                    </a>
                    
                    {isAuthenticated?existingUser:newUser}
                    </div>
                </nav>
                     <ul id='dropdown1' style={{width:'300px'}} class='black dropdown-content'>
                     {isAuthenticated?existingUser2:newUser2} 
                    </ul>
            </div>

        )
    }
}

//we have access to the username since in our state we have assigned the action.user
//to the user. so we can get their username. we used tenary operator to check
//if there is a user, if true, then we return the user saying welcome

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        auth:state.auth
    }
}

const mapDispatchToProps=(dispatch)=>({
    Logout:()=>{dispatch(SignOut())}
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
