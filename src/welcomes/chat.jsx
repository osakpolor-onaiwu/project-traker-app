
import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Chat extends Component {
    state={
        chat:''
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }
    
    handleSubmit=(e)=>{
    e.preventDefault();
    }

    render() {
        return (
            <div className="row container">
                <form class="col l12" onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="input-field col l12">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="chat" type="text" class="validate white-text" onChange={this.handleChange}/>
                        <label for="chat">Write a Message</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps =(dipatch)=> {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Chat)
export default Chat
