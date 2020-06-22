import React from 'react'
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import SignInLink from '../links/signInLink'
import SignOutLink from '../links/signOutLink'

class Navbar extends React.Component{

    componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

    }

    render(){
        return(
            <div className='navbar-fixed'>
                <nav className='black'>
                    <div class="nav-wrapper container  ">
                    <a href="#!" class="brand-logo">ProjectP</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class=" hide-on-med-and-down">
                       <SignInLink/>
                       <SignOutLink/>
                    </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
                    {/* <SignInLinkMobile/>
                    <SignOutLinkMobile/> */}
                </ul>
            </div>

        )
    }
}

export default Navbar
