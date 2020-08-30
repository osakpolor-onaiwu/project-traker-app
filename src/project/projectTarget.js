import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import {Redirect} from 'react-router-dom'
import TargetAction from '../actions/targetAction'
import ProjectActionGet from '../actions/projectAction2'
import {connect} from 'react-redux'

class ProjectTarget extends Component {
    state={
        Target:'',
        Start:null,
        End:null,
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }

      handleSubmit=(e)=>{
        e.preventDefault();
        this.props.TargetAction(this.state,this.props.project_id)
        console.log(this.state)
        console.log(this.props.project_id)
        const x=document.getElementById('create').innerHTML="target Created"


      }


    componentDidMount(){
        $('#Description').val('');
        M.textareaAutoResize($('#Description'));

        this.props.ProjectActionGet()
    }

    render() {
        return (

            <div className="">
                <form className="col l12" onSubmit={this.handleSubmit}>
                    <div className="row">

                            <div className="input-field col l12">
                                <textarea id="Target" className="materialize-textarea white-text" onChange={this.handleChange} ></textarea>
                                <label for="Description">Target</label>
                            </div>

                            <div className="input-field col l2">
                                <input type="date"  id='Start' className="validate white-text active" required={true} onChange={this.handleChange} />
                                <label for="date">Start date</label>
                            </div>
                            <div className="input-field col l2">
                                <input type="date"  id='End' className="validate white-text active" required={true} onChange={this.handleChange}/>
                                <label for="date">End date</label>
                            </div>

                    </div>

                    <div><p id='create' className='white-text'></p></div>
                    <button type="submit" className='btn blue darken-1'>Add target</button>
                </form>


            </div>

        )
    }
}

const mapDispatchToProps =(dispatch)=> {
  return{
    TargetAction:(target,project_id)=>{dispatch(TargetAction(target,project_id))},
    ProjectActionGet:()=>{dispatch(ProjectActionGet())}
  }
 }

export default connect(null,mapDispatchToProps) (ProjectTarget)
