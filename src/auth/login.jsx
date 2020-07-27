import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import LoginAction from '../actions/loginAction'

export class Login extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }

      handleSubmit=(e)=>{
        e.preventDefault();
        this.props.LoginAction(this.state)
        this.props.history.push("/")

      }

    render() {
        return (
            <div>
                 <div class="row container">
                    <form class="col l12" onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="input-field col l12">
                        <input id="email" type="email" class="white-text validate" onChange={this.handleChange} />
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="Enter a valid email" data-success="right"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col l12">
                        <input type="password" name="password" class="white-text validate" id="password" onChange={this.handleChange}/>
                        <label for="Password">Password</label>
                        <span class="helper-text" data-error="wrong" data-success="right"></span>
                        </div>
                    </div>
                    <button type="submit" className='btn blue darken-1'>Login</button>
                    <div>
                    <p className='white-text'>Don't have an account?</p>
                    <NavLink className='btn blue darken-1' to='/signUp'>SignUp</NavLink>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps=(dispatch)=> {
  return{
  LoginAction:(credentials)=>{dispatch(LoginAction(credentials))}
}
}

export default connect(null, mapDispatchToProps)(Login)
