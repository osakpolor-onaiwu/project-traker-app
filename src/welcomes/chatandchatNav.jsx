import React from 'react'
import ChatSideNav from '../layout/chatSideNav'
import Chat from '../welcomes/chat'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const ChatAndChatNav=()=>{
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
    return{
    }
}

export default connect (mapStateToProps)(ChatAndChatNav);
