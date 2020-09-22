
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatAction from '../actions/chatAction'
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
        this.props.ChatActionGet()
    }

    render() {
        const {chat,auth}=this.props
        const chatCard=chat.length?(chat.map((chat)=>{
            return(
                <div className="row">
                    <div className="col  s8 m6 l6">
                        <div  key={chat.owner} className="blue-grey darken-2 card">
                            <div className="card-content black-text">
                                <p>{chat.message}</p>
                                <p style={{fontSize:'0.8em'}}>{chat.created_at}</p>
                                <p>by {chat.owner}</p>
                            </div>
                            <div className="card-action">
                                <a href="#" style={{marginRight:'5px'}}className="btn  blue darken-1">Delete</a>
                                <a href="#" className="btn  blue darken-1">Comment</a>
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
                        <div class="input-field col l12">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="message" type="text" class="validate black-text" required={true} onChange={this.handleChange}/>
                        <label htmlFor="message" className='black-text'>Write a Message</label>
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
