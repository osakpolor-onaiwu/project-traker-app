import React from 'react'
import {NavLink} from 'react-router-dom'
import {compose} from 'redux'
import { connect } from "react-redux";
import {firestoreConnect} from 'react-redux-firebase'


const ChatSideNav=({users})=>{
  const members=users.length?(users.map((user)=>{
    return(
      <div>
      <li className='sideli'>
      <i className="fa fa-user"></i>
      <NavLink to='/profile' className='padding white-text'>{user.fullName}</NavLink>
      </li>
      </div>
    )
  })):(
    <div>
    <p>No Users</p>
    </div>
  )
    return(
            <div className='sidenavi '>
                <h6 className='center white-text'>Members</h6>
                <ul className="  white-text sideul">
                {members}
                </ul>
            </div>
    )
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        users: state.firestore.ordered.users,
        auth:state.firebase.auth,
        // notifications:state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'users',orderBy:['fullName','desc']},
    ])
) (ChatSideNav)
