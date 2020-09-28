import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../layout/footer";

class CarouselTutorial extends Component {
    componentDidMount() {
        document.addEventListener("DOMContentLoaded", function () {
            var elems = document.querySelectorAll(".carousel");
            var instances = M.Carousel.init(elems, {
                fullWidth: true,
                indicators: true,
            });
        });
    }

    render() {
        const { auth } = this.props;
        return (
            <div>
                <div className="container caroheight section">
                    <div className="carousel carousel-slider center black-text">
                        <div className="carousel-fixed-item center">
                            <span>
                                <NavLink
                                    to="/signUp"
                                    className="btn waves-effect caro blue darken-4 white-text darken-text-2">
                                    SignUp
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className="btn waves-effect caro blue darken-4 white-text darken-text-2">
                                    Login
                                </NavLink>
                            </span>
                        </div>
                        <div
                            className="carousel-item  black-text"
                            href="#one!">
                            <img
                                width="100%"
                                height="100%"
                                src="/welcome.jpg"
                                alt="1"
                            />
                            <div className="carousel-text1">
                                <h2 className='black-text'>WELCOME TO PROJECTP</h2>
                                <p className="black-text"></p>
                            </div>
                        </div>

                        <div
                            className="carousel-item  black-text"
                            href="#two!">
                            <img
                                width="100%"
                                height="100%"
                                src="/project2.jpg"
                                alt="2"
                            />
                            <div className="carousel-text">
                                <h2 className='black-text'>CREATE PROJECTS</h2>
                                <p className="black-text">
                                    Create your projects, give them a title, description, and set a start and end date
                                </p>
                            </div>
                        </div>

                        <div
                            className="carousel-item  black-text"
                            href="#three!">
                            <img
                                width="100%"
                                height="100%"
                                src="/projectReal.jpg"
                                alt="3"
                            />
                            <div className="carousel-text3">
                                <h2 className='black-text'>SET TARGETS</h2>
                                <p className="black-text">
                                    For each projects, your can create short term targets
                                </p>
                            </div>
                        </div>

                        <div
                            className="carousel-item blue black-text"
                            href="#four!">
                            <img
                                width="100%"
                                height="100%"
                                src="/discuss.jpg"
                                alt="4"
                            />
                            <div className="carousel-text4">
                                <h2 className='black-text'>DISCUSS YOUR PROJECTS</h2>
                                <p className="black-text">
                                   Projects are completed when the team involved can share ideas. Discuss with you team about the Projects you Created
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};
export default connect(mapStateToProps)(CarouselTutorial);
