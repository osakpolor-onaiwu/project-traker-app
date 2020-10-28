import React from 'react'
import moment from "moment";
import ProjectTarget from './projectTarget'

 const PhoneProjects=({project})=> {
    const projectPhone = project.length ? (
        project.map((pro) => {
            return (
                <div className="col s12 m12" key={pro.id}>
                    <div className="card teal darken-4">
                        <div className="card-content">
                            <p>
                                <h5 className="center white-text">
                                    Project Title
                                </h5>
                                <div class="divider"></div>
                                <h6 className="center white-text">
                                    {pro.ProjectTitle}
                                </h6>
                            </p>
                            <p
                                style={{ wordWrap: "break-word" }}
                                className="white-text">
                                <h5 className="center white-text">
                                    Description
                                </h5>
                                <div class="divider"></div>
                                {pro.Description}
                            </p>
                        </div>

                        <div className="card-action">
                            <p className="white-text">
                                Start:{" "}
                                {moment(pro.Start).format(
                                    "ddd,MMM Do YYYY"
                                )}
                            </p>
                            <p className="white-text">
                                End:{" "}
                                {moment(pro.End).format("ddd,MMM Do YYYY")}
                            </p>
                        </div>
                    </div>
                    <ProjectTarget project_id={pro.id} />
                </div>
            );
        })
    ) : (
        <div>
            <p>no project</p>
        </div>
    );
    return (
        <div>
            {projectPhone}
        </div>
    )
}


export default PhoneProjects