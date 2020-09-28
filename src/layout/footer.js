import React, { Component } from 'react'
import FeedBackAction from '../actions/feedBackAction'
import {connect} from 'react-redux'


 class Footer extends Component {
    state={
        FirstName:'',
        LastName:'',
        Email:'',
        Comment:''
    }

    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }

    handleSubmit=(e)=>{
      e.preventDefault();
      console.log(this.state)
      this.props.FeedBackAction(this.state)
    }
    
    render() {
        return (
            <div>
                <footer className="page-footer black ">
                    <div className="container black">
                        <div className="row">
                            <div className="col s12 m8 l8">
                                <h5 className="white-text">Leave a comment</h5>
                                <form action="">
                                    <div className="input-field col s12 l6">
                                        <input type="text" id="FirstName" className="validate white-text" onChange={this.handleChange}/>
                                        <label htmlFor="FirstName">First Name</label>
                                    </div>
                                    <div className="input-field col s12 l6">
                                        <input type="text" id="LastName" className="validate white-text" onChange={this.handleChange}/>
                                        <label htmlFor="LastName">Last Name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input type="email" id="Email" className="validate white-text" onChange={this.handleChange}/>
                                        <label htmlFor="Email" data-error="wrong" data-success="right">Email</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <textarea id="Comment" className="materialize-textarea" onChange={this.handleChange}></textarea>
                                        <label htmlFor="Comment">Comment</label>
                                    </div>
                                </form>
                            </div>

                            <div className="col s12 m4 l4">
                                <h5 className="white-text">Contact me</h5>
                                <ul>
                                    <li><a href='https://web.facebook.com/osakpolor.onaiwu/'>
                                        <i class="fa fa-facebook-official" aria-hidden="true"> </i>
                                        <span className='white-text'> Facebook</span>
                                        </a>
                                    </li>
                                    <li><a href='https://www.instagram.com/osakpolor_onaiwu/'>
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                        <span className='white-text'> Instagram</span>
                                        </a>
                                    </li>
                                    <li><a href='www.linkedin.com/in/osakpolor-onaiwu-718a09174'>
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        <span className='white-text'> LinkedIn</span>
                                        </a>
                                    </li>
                                    <li><a href='http://gmail.com' >
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <span className='white-text'> gmail</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2020 ProjectP by Osakpolor Onaiwu
                            <a className="grey-text text-lighten-4 right" href="#!"></a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    FeedBackAction: (feedback)=>dispatch(FeedBackAction(feedback))
})

export default connect(null,mapDispatchToProps)(Footer)


