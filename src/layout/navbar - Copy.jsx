import React from 'react'
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import {NavLink} from 'react-router-dom'
import SignInLink from '../links/signInLink'
import SignOutLink from '../links/signOutLink'
import {connect} from 'react-redux'

class Navbar extends React.Component{

    componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

    }

    render(){
      const {auth,profile}=this.props
      const links=auth.uid?<SignInLink profile={profile}/>:<SignOutLink/>
        return(
            <div className='navbar-fixed'>
                <nav className='black'>
                    <div class="nav-wrapper container  ">
                    <a href="/" class="brand-logo">ProjectP</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class=" hide-on-med-and-down">
                    {links}
                    </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
                    {links}
                </ul>
            </div>

        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)