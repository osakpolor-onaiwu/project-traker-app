import React, { Component } from "react";
import { connect } from "react-redux";
import signUpAction from "../actions/signUpAction";
import { NavLink, Redirect } from "react-router-dom";
import Footer from "../layout/footer";

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        if (!this.props.isAuthenticated) {
            document.getElementById("error").innerHTML = this.props.authError;
        }
    };

    render() {
        if (this.props.isAuthenticated) {
            document.getElementById("error").innerHTML =
                "Sign up success, login to your account";
            return <Redirect to="/login" />;
        }
        return (
            <div>
                <div
                    style={{ marginTop: "15px", height: "520px" }}
                    className="row login teal darken-4 container">
                    <form
                        className="col m12 s12 xl12 l12"
                        onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col m12 s12 xl12 l12">
                                <i className="material-icons"></i>
                                <input
                                    id="username"
                                    type="text"
                                    className="validate white-text"
                                    required={true}
                                    onChange={this.handleChange}
                                />
                                <label
                                    htmlFor="username"
                                    className="white-text">
                                    Username
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col m12 s12 xl12 l12">
                                <input
                                    id="email"
                                    type="email"
                                    className="white-text validate"
                                    required={true}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="email" className="white-text">
                                    Email
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Enter a valid email"
                                    data-success="ok"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col m12 s12 xl12 l12">
                                <input
                                    type="password"
                                    name="password"
                                    minLength={8}
                                    className="white-text validate"
                                    required={true}
                                    id="password"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="Password">Password</label>
                                <span
                                    className="helper-text white-text"
                                    data-error="wrong"
                                    data-success="right">
                                    password must be at least 8 characters
                                </span>
                                <span
                                    className="helper-text white-text"
                                    data-error="wrong"
                                    data-success="right">
                                    password should not be similar to username
                                </span>
                            </div>
                        </div>
                        <button
                            className="btn blue darken-4"
                            id="submit"
                            type="submit">
                            SignUP
                        </button>
                        <p id="error" className="white-text"></p>
                        <p className="white-text">Already have an account?</p>
                        <NavLink
                            style={{ marginBottom: "10px" }}
                            className="btn blue darken-4"
                            to="/login">
                            Login
                        </NavLink>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
        authError: state.auth.authError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => {
            dispatch(signUpAction(newUser));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
