import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignUp extends Component {
  state={
    firstName:'',
    lastName:'',
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
    console.log(this.state)
  }

    render() {
        return (
            <div>
                <div class="row container">
                    <form class="col l12" onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="input-field col l6">
                        <i class="material-icons prefix"></i>
                        <input id="firstName" type="text" class="validate white-text" onChange={this.handleChange}/>
                        <label for="firstName">First Name</label>
                        </div>
                        <div class="input-field col l6">
                        <i class="material-icons prefix"></i>
                        <input id="lastName" type="text" class="validate white-text" onChange={this.handleChange}/>
                        <label for="lastName">last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col l12">
                        <input id="email" type="email" class="white-text validate" onChange={this.handleChange}/>
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="Enter a valid email" data-success="ok"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col l12">
                        <input type="password" name="password" class="white-text validate" id="password" onChange={this.handleChange}/>
                        <label for="Password">Password</label>
                        <span class="helper-text white-text" data-error="wrong" data-success="right">password must be at least 6 characters</span>
                        </div>
                    </div>
                    <button className="btn blue darken-2" type='submit'> SignUP</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps =()=> {

}

// export default connect(mapStateToProps, mapDispatchToProps)(signUp)
export default SignUp
