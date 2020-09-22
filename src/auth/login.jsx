import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import LoginAction from '../actions/loginAction'
import {Redirect} from 'react-router-dom'

export class Login extends Component {
    state={
        username:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }

    handleSubmit=(e)=>{
      e.preventDefault();
      console.log(this.state)
      this.props.LoginAction(this.state.username,this.state.password)
      this.props.history.push("/dashboard")

    }

    render() {
      if (this.props.isAuthenticated){
        return<Redirect to='/dashboard'/>
      }
      //this checks if the user is already logged in, if  is authenticated is true, it will redirect to dash board.
        return (
            <div>
                 <div style={{marginTop:'15px',height:'500px'}} class="row login container">

                    <form class="col m12 s12 xl12  l12" onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="input-field col m12 s12 xl12  l12">
                        <input id="username" type='text' class="black-text validate" onChange={this.handleChange} />
                        <label className='black-text' htmlFor="username">username</label>
                        <span class="helper-text" data-error="Enter a valid username" data-success="right"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col m12 s12 xl12  l12">
                        <input type="password" name="password" class="black-text validate" id="password" onChange={this.handleChange}/>
                        <label className='black-text' htmlFor="Password">Password</label>
                        <span class="helper-text" data-error="wrong" data-success="right" class='black-text'></span>
                        </div>
                    </div>
                    <button type="submit" id='submit' className='btn blue darken-1'>Login</button>
                    <p className='black-text' id='message'></p>
                    <div>
                    <p className='black-text'>Don't have an account?</p>
                    <NavLink style={{marginBottom:'15px'}} className='btn blue darken-1' to='/signUp'>SignUp</NavLink>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    isAuthenticated:state.auth.isAuthenticated
  }
}
const mapDispatchToProps=(dispatch)=> {
  return{
  LoginAction:(username,password)=>{dispatch(LoginAction(username,password))}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
