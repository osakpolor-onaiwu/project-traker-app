
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatAction from '../actions/chatAction'
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import moment from 'moment'
import ChatActionGet from '../actions/chatActionGet'
import {Redirect,NavLink} from 'react-router-dom'
import {compose} from 'redux'

 class Chat extends Component {
    state={
        message:'',
        image:null
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }

    handleSubmit=(e)=>{
    e.preventDefault();
    this.props.ChatAction(this.state)
    }

    componentDidMount(){
        $('#message').val('');
        M.textareaAutoResize($('#message'));
        this.props.ChatActionGet()
    }

    render() {
        const {chat,auth}=this.props
        const chatCard=chat.length?(chat.map((chat)=>{
            return(
                <div className="row">
                    <div className="col  s8 m6 l6">
                        <div  key={chat.owner} className="teal darken-4 card">
                            <div className="card-content white-text">
                                <p classname='white-text'>{chat.message}</p>
                                
                                <p classname='white-text' style={{fontSize:'0.65em', fontStyle:'italic'}}>
                                    by {auth.username} on {moment(chat.created_at).format("ddd, MMM Do YYYY hA")}
                                </p>
                                
                            </div>
                            <div className="card-action">
                                <a href="#" style={{marginRight:'10px',fontSize:'0.7em'}}className=" white-text">Delete</a>
                                <a href="#" style={{fontSize:'0.7em'}} className="white-text">Comment</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })):(
            <div>
            <p className='black-text'>No chats</p>
            </div>
        )
        return (
          <div className='container'>
            <div className="row">
                <form class="col s12 m12 l12" onSubmit={this.handleSubmit}>
                    <div class="row">
                        
                        <div className="input-field col s12 m12 xl12 l12">
                            <i class="material-icons prefix">account_circle</i>
                            <textarea id="message" className="materialize-textarea black-text" onChange={this.handleChange} ></textarea>
                            <label htmlFor="message" className='black-text'>type a message</label>
                        </div>
                        
                    </div>
                    <button type="submit" className='btn blue darken-2'>Send</button>
                </form>
            </div>
            <div className='row'>
                {chatCard}
            </div>
          </div>
        )
    }
}

const MapStateToProps=(state)=>({
    chat:state.chat.chat,
    auth:state.auth.user
})

const mapDispatchToProps=(dispatch)=>({
    ChatAction:(chat)=>{dispatch(ChatAction(chat))},
    ChatActionGet:()=>{dispatch(ChatActionGet())}
})

  export default connect(MapStateToProps,mapDispatchToProps)(Chat);
