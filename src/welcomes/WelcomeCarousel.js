import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize'
import {NavLink} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'

class CarouselTutorial extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    });
  });
}

  render() {
    const {auth}=this.props
    return (
      <div className='container caroheight section'>
        <div class="carousel carousel-slider center white-text">
          <div class="carousel-fixed-item center">
          <span>
            <NavLink to='/signUp' class="btn waves-effect caro blue white-text darken-text-2">SignUp</NavLink>
            <NavLink to='/login' class="btn waves-effect caro blue white-text darken-text-2">Login</NavLink>
          </span>
          </div>
          <div class="carousel-item red white-text" href="#one!">
            <h2>First Panel</h2>
            <p class="white-text">This is your first panel</p>
          </div>
          <div class="carousel-item amber white-text" href="#two!">
            <h2>Second Panel</h2>
            <p class="white-text">This is your second panel</p>
          </div>
          <div class="carousel-item green white-text" href="#three!">
            <h2>Third Panel</h2>
            <p class="white-text">This is your third panel</p>
          </div>
          <div class="carousel-item blue white-text" href="#four!">
            <h2>Fourth Panel</h2>
            <p class="white-text">This is your fourth panel</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    auth:state.auth
  }
}
export default connect(mapStateToProps) (CarouselTutorial);
