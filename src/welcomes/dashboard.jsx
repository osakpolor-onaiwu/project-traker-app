import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ProjectActionGet from "../actions/projectAction2";
import ChatActionGet from "../actions/chatActionGet";
import DashboardSide from "../layout/dashboardSide";
import Footer from "../layout/footer";
import { Carousel } from "antd";
import ColumnChart from '../charts/columnChart'
import LineChart from '../charts/LineChart'

function onChange(a, b, c) {}

const contentStyle = {
    height: "420px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.ProjectActionGet();
        this.props.ChatActionGet();
    }
    render() {
        const { chat, projects, auth } = this.props;
        return (
            <div className="row ">
                <div className="col black sidenavi fixed l2 hide-on-med-and-down">
                    <DashboardSide />
                </div>
                <div className="container right col s12 m12 l10">
                    <div className="row">
                        <div className="col hide-on-small-only m6 l6 xl6">
                            <div style={{ height: "420px" }} className="card">
                                <Carousel
                                    autoplay
                                    adaptiveHeight={true}
                                    className="dashCaro"
                                    autoplaySpeed={3500}
                                    afterChange={onChange}>
                                    <div>
                                        <img
                                            height="420px"
                                            width="100%"
                                            src="./welcome.jpg"
                                            alt="slide1"
                                        />
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        <div className="col s12 m6 l6">
                            <div className="row">
                                <div className="col  s6 m6 darken-3 l6 xl6">
                                    <div className="card">
                                        <div className="card-image">
                                            <NavLink to="/createProject">
                                                <img
                                                    height="420px"
                                                    src="/project2.jpg"
                                                    className="img-responsive dashcard"
                                                />
                                                <span className="card-title">
                                                    Create project
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className=" col  s6 m6  l6 xl6">
                                    <div className="card">
                                        <div className="card-image">
                                            <NavLink to="/createChat">
                                                <img
                                                    height="420px"
                                                    src="/chat.jpg"
                                                    className="img-responsive dashcard"
                                                />
                                                <span className="card-title">
                                                    Chat
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className=" col s6 m6 l6 xl6">
                                    <div className="card">
                                        <div className="card-image">
                                            <NavLink to="/groups">
                                                <img
                                                    height="420px"
                                                    src="/discuss.jpg"
                                                    className="img-responsive dashcard"
                                                />
                                                <span className="card-title">
                                                    Groups
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="  col  s6 m6  l6 xl6">
                                    <div className="card">
                                        <div className="card-image">
                                            <NavLink to="/projects">
                                                <img
                                                    height="420px"
                                                    src="/projecta.jpg"
                                                    className="img-responsive dashcard"
                                                />
                                                <span className="card-title">
                                                    View Projects
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m12 l6">
                            <h5 className='center'>Monthly Visits</h5>
                            <LineChart/>
                        </div>

                        <div className="col s12 m12 l6">
                        <h5 className='center'>Activity</h5>
                            <ColumnChart/>
                        </div>
                        <div className="col s12 m12 l12 xl12">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    chat: state.chat.chat,
    projects: state.project.projects,
    auth: state.auth.user,
});
const mapDispatchToProps = (dispatch) => {
    return {
        ProjectActionGet: () => {
            dispatch(ProjectActionGet());
        },
        ChatActionGet: () => {
            dispatch(ChatActionGet());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
