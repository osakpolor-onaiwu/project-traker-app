import React from 'react'
import {connect} from 'react-redux'
import { Collapse } from 'antd'
import moment from "moment";
import TargetDelete from "../actions/targetDelete";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const TargetCollapse=({target,TargetDelete})=> {

      const TargetCollapse= target.length ? (
        target.map((tar) => {
            return (
                <Collapse onChange={callback}>
                <Panel className='teal darken-4' header={`Target ${target.indexOf(tar)+1}`} key={tar.id}>
                    <div className="row">
                        <div className="col s12 m4 l4">
                            <div className="card teal darken-4">
                                <div className="card-content">
                                    <p>{tar.Target}.</p>
                                </div>
                                <div className="card-action">
                                    <p>{`Start:  ${moment(target.Start).format("dddd,MMMM Do YYYY")}`}</p>
                                    <p>{`End: ${moment(target.End).format("dddd,MMMM Do YYYY")}`}</p>
                                    <button
                                        className="btn waves-effect waves-light btn-small blue darken-4 white-text"
                                        onClick={() =>
                                            TargetDelete(tar.id)
                                        }>
                                        Delete
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </Panel>
                </Collapse>
            );
        })
    ) : (
        <div>
            <p>no target</p>
        </div>
    )
    return(
        <div>
        {TargetCollapse}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
   
    TargetDelete: (targetId) => {
        dispatch(TargetDelete(targetId));
    },
   
});

export default connect (null,mapDispatchToProps)(TargetCollapse)