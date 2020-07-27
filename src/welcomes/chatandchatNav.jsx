import React from 'react'
import ChatSideNav from '../layout/chatSideNav'
import Chat from '../welcomes/chat'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const ChatAndChatNav=({auth,profile})=>{
  if (!auth.uid) {return<Redirect to='/login'/>}
  return(
    <div>
        <div className='row'>
            <div className='col fixed l2 xl2 m4 white-text black darken sidenavi'>
                <ChatSideNav/>
            </div>
            <div className='col right l10 xl10 '>
                <Chat/>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect (mapStateToProps)(ChatAndChatNav);
