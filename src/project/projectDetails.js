import React, { Component } from "react";
import SideNav from "../layout/sidenav";
import { connect } from "react-redux";
import ProjectTarget from "./projectTarget";
import TargetActionGet from "../actions/targetGet";
import Footer from "../layout/footer";
import moment from "moment";
import TargetDelete from "../actions/targetDelete";
import ProjectDelete from "../actions/projectDelete";
import TargetCollapse from './targetCollapse'
import PhoneProjects from './phoneProjects'


class ProjectDetails extends Component {
    state = {
        counter: 1,
    };

 

    componentDidMount() {
        this.props.TargetActionGet();
        
    }

    render() {
        const { project, target } = this.props;
        console.log(target);
        // for desktop
        const eachTarget = target.length ? (
            target.map((target) => {
                return (
                    <tbody key={target.id}>
                        <tr className="black-text">
                            <td
                                colSpan="2"
                                style={{
                                    wordWrap: "break-word",
                                    width: "200px",
                                    textAlign: "left",
                                }}>
                                {target.Target}
                            </td>
                            <td>
                                {moment(target.Start).format(
                                    "dddd,MMMM Do YYYY"
                                )}
                            </td>
                            <td>
                                {moment(target.End).format("dddd,MMMM Do YYYY")}
                            </td>
                            <td>
                                <button
                                    className="btn waves-effect waves-light btn-small blue darken-4 black-text"
                                    onClick={() =>
                                        this.props.TargetDelete(target.id)
                                    }>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                );
            })
        ) : (
            <div class="">No targets created yet.</div>
        );

        // for desktop
        const eachProject = project.length ? (
            project.map((project) => {
                return (
                    <div key={project.id}>
                        <table className=" centered responsive-table section highlight black-text">
                            <thead className="grey darken-4">
                                <tr className="white-text">
                                    <th colspan="2" style={{ width: "200px" }}>
                                        Project Title
                                    </th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>
                                        {" "}
                                        <button
                                            className="btn waves-effect waves-light blue darken-4"
                                            onClick={() => {
                                                this.props.ProjectDelete(
                                                    project.id
                                                );
                                                this.props.history.push(
                                                    "/createProject"
                                                );
                                            }}>
                                            delete
                                        </button>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="black-text">
                                    <td
                                        colspan="2"
                                        style={{
                                            wordWrap: "break-word",
                                            width: "200px",
                                            textAlign: "left",
                                        }}>
                                        {project.ProjectTitle}
                                    </td>
                                    <td>
                                        {moment(project.Start).format(
                                            "dddd,MMMM Do YYYY"
                                        )}
                                    </td>
                                    <td>
                                        {moment(project.End).format(
                                            "dddd,MMMM Do YYYY"
                                        )}
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="5">
                                        <h5 className="center">
                                            Project Description
                                        </h5>
                                        <div className="left">
                                            {project.Description}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <br />
                        <ProjectTarget project_id={project.id} />
                    </div>
                );
            })
        ) : (
            <div class="preloader-wrapper big active">
                <p>no project</p>
            </div>
        );




        return (
            <div className="row">
                <div className="col fixed l2 xl2 m4 black-text hide-on-med-and-down black darken sidenavi">
                    <SideNav />
                </div>

                <div className="col right m12 s12 l10 xl10">
                    <div className="hide-on-med-and-down">
                        {eachProject}
                        <br />
                    </div>
                    <div
                        style={{ marginBottom: "5px" }}
                        className="row hide-on-large-only">
                        <PhoneProjects project={project}/>
                    </div>
                </div>

                <div className="col l10 right xl10 hide-on-med-and-down">
                    <table className=" centered responsive-table section highlight black-text">
                        <thead className="grey darken-4">
                            <tr className="white-text">
                                <th colspan="2" style={{ width: "200px" }}>
                                    Targets
                                </th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        {eachTarget}
                    </table>
                    <Footer />
                </div>

                <div className="row hide-on-large-only">
                    <div className="col s12 m12">
                    <TargetCollapse target={target}/>
                    </div>
                    <div className="col s12 m12">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownprops) => {
    const id = ownprops.match.params.projectDetails;
    console.log(state.project.projects);
    return {
        project: state.project.projects.filter((project) => {
            return project.id == id;
        }),
        target: state.target.target.filter((target) => {
            return target.project == id;
        }),
    };
};

const mapDispatchToProps = (dispatch) => ({
    TargetActionGet: (project_id) => {
        dispatch(TargetActionGet(project_id));
    },
    TargetDelete: (targetId) => {
        dispatch(TargetDelete(targetId));
    },
    ProjectDelete: (project_id) => {
        dispatch(ProjectDelete(project_id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
