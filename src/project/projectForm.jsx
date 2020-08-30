import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import {Redirect} from 'react-router-dom'
import ProjectAction from '../actions/projectAction'
import ProjectActionGet from '../actions/projectAction2'
import {connect} from 'react-redux'

class ProjectForm extends Component {
    state={
        ProjectTitle:'',
        Start:null,
        End:null,
        Description:'',
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }

      handleSubmit=(e)=>{
        e.preventDefault();
        this.props.ProjectAction(this.state)
        console.log(this.state)
        const x=document.getElementById('create').innerHTML="Project Created, click on it's title on the right to view it and set targets"


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
                            <div className="input-field col l8">
                                <input id="ProjectTitle" type="text" className="white-text validate" required={true} onChange={this.handleChange}/>
                                <label for="ProjectTitle">Project Title</label>
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
                    <div className="row">
                        <div className="input-field col l12">
                        <textarea id="Description" className="materialize-textarea white-text" onChange={this.handleChange} ></textarea>
                        <label for="Description">Project Description</label>
                        </div>
                    </div>
                    <div><p id='create' className='white-text'></p></div>
                    <button type="submit" className='btn blue darken-1'>Create Project</button>
                </form>


            </div>

        )
    }
}

const mapDispatchToProps =(dispatch)=> {
  return{
    ProjectAction:(project)=>{dispatch(ProjectAction(project))},
    ProjectActionGet:()=>{dispatch(ProjectActionGet())}
  }
 }

export default connect(null,mapDispatchToProps) (ProjectForm)
