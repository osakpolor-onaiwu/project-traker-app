import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios';
class ChatList extends React.Component{
   
    render(){
    const {chat,auth}=this.props
    const chatList=auth.length?(auth.map((auth)=>{
        return(
        <div>
        <NavLink to='#'  className='padding white-text'>
        <li className='sideli' key={auth.id}>
        <i class="fa fa-user" aria-hidden="true"></i>
        {auth.username}
        </li>
        </NavLink>
        </div>
        )
    })):(
        <div>
        <p>{auth.username}</p>
        </div>
    )
    return(
        <div className='sidenavi'>
            <h6 className='center white-text'>chats</h6>
            <ul className="  white-text sideul">
              {chatList}
            </ul>
        </div>
    )
}
}

const mapStateToProps=(state,ownprops)=>{
    console.log(state.chat.chat)
    return{
      chat:state.chat.chat,
      auth:state.auth.user
    }
  }



export default connect(mapStateToProps)(ChatList)
