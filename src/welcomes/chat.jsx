
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import ChatAction from '../actions/chatAction'
// import {Redirect} from 'react-router-dom'
// import {compose} from 'redux'

//  class Chat extends Component {
//     state={
//         chat:''
//     }
//     handleChange=(e)=>{
//         this.setState({
//           [e.target.id]:e.target.value
//         })
//       }

//     handleSubmit=(e)=>{
//     e.preventDefault();
//     this.props.ChatAction(this.state)
//     }

//     render() {
//       const {chats,auth}=this.props;
//         const chatList=chats.length?(chats.map((chat)=>{
//           return(
//             <div class="col s12 l4 m6">
//               <div class="card blue-grey darken-4">
//                 <div class="card-content white-text">
//                   <span class="card-title">posted by {chats.authorFullName}</span>
//                   <div className='divider'></div>
//                   <p>{chats.chat}</p>
//                   <p>time of post</p>
//                 </div>
//               </div>
//             </div>
//           )
//         })):(
//           <div>
//           <p>no chats</p>
//           </div>
//         )
//         return (
//           <div className='container'>
//             <div className="row">
//                 <form class="col l12" onSubmit={this.handleSubmit}>
//                     <div class="row">
//                         <div class="input-field col l12">
//                         <i class="material-icons prefix">account_circle</i>
//                         <input id="chat" type="text" class="validate white-text" onChange={this.handleChange}/>
//                         <label for="chat">Write a Message</label>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <div className='row'>
//                 {this.chatList}
//             </div>
//           </div>
//         )
//     }
// }


//   export default connect(Chat);
