import React from 'react'
import ChatSideNav from '../layout/chatSideNav'
import Chat from './chat'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Footer  from '../layout/footer'


const ChatAndChatNav=()=>{
  return(
    <div>
        <div className='row'>
            <div className='col fixed l2 xl2 m3 hide-on-small-only black-text black sidenavi'>
                <ChatSideNav/>
            </div>
            <div className='col right s12 m8 l10 xl10 '>
                <Chat/>
                <Footer/>
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
