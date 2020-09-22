import React, { Component } from 'react'
import { connect } from 'react-redux'
import signUpAction from '../actions/signUpAction'
import {NavLink,Redirect} from 'react-router-dom'

class SignUp extends Component {
  state={
    username:'',
    email:'',
    password:''
  };

  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
   

    this.props.signUp(this.state)
    if(this.props.isAuthenticated){
      document.getElementById('error').innerHTML='success'
      return <Redirect to='/dashboard'/> 
    }
    else{
     document.getElementById('error').innerHTML=this.props.authError
    }
  }

    render() {
      
        return (
            <div>
                <div style={{marginTop:'15px',height:'500px'}} className="row login container">
                    <form className="col m12 s12 xl12 l12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col m12 s12 xl12 l12">
                        <i className="material-icons"></i>
                        <input id="username" type="text" className="validate black-text" onChange={this.handleChange}/>
                        <label htmlFor="username" className='black-text'>Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col m12 s12 xl12 l12">
                        <input id="email" type="email" className="black-text validate" onChange={this.handleChange}/>
                        <label htmlFor="email" className='black-text'>Email</label>
                        <span className="helper-text" data-error="Enter a valid email" data-success="ok"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col m12 s12 xl12 l12">
                        <input type="password" name="password" minLength={8} className="black-text validate" id="password" onChange={this.handleChange}/>
                        <label htmlFor="Password">Password</label>
                        <span className="helper-text black-text" data-error="wrong" data-success="right">password must be at least 8 characters</span>
                        </div>
                    </div>
                    <button className="btn blue darken-2" id='submit' type='submit'> SignUP</button>
                    <p id='error' className='black-text'></p>
                    <p className='black-text'>Already have an account?</p>
                    <NavLink style={{marginBottom:'15px'}} className='btn blue darken-2' to='/login'>Login</NavLink>
                    </form>
                 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated:state.auth.isAuthenticated,
  authError:state.auth.authError
 })

const mapDispatchToProps =(dispatch)=> {
  return{
  signUp:(newUser)=>{dispatch(signUpAction(newUser))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
