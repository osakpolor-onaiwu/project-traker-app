import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import signOut from '../actions/signOutAction'

 const SignInLink=({signOut,profile})=> {
    return (
        <ul id="nav-mobile" class="right">
            <li><NavLink to="/createProject">Create Project</NavLink></li>
            <li><NavLink to="/chatandchatNav">Chat Room</NavLink></li>
            <li>
                <a onClick={signOut}>
                    Log Out
                </a></li>
            <li className=''><NavLink to='/profile'><i className='fa fa-user'></i> {profile.fullName}</NavLink></li>
        </ul>
    )
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>{dispatch(signOut())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInLink);
