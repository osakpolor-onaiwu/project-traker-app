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
        const x=document.getElementById('large').innerHTML="Project Created, click on it's title on the left to view it and set targets"
        const b=document.getElementById('small').innerHTML="Project Created, click it's title below to view it and set targets"

      }


    componentDidMount(){
        $('#Description').val('');
        M.textareaAutoResize($('#Description'));

        this.props.ProjectActionGet()
    }

    render() {
        return (

            <div className="">
                <form  style={{marginTop:'30x'}} className="col l12" onSubmit={this.handleSubmit}>
                    <div className="row">
                            <div className="input-field col xl8 s12 m12 l8">
                                <input id="ProjectTitle" maxLength='50' type="text" className="black-text validate" required={true} onChange={this.handleChange}/>
                                <label htmlFor="ProjectTitle" className='black-text'>Project Title</label>
                                <span class="helper-text" data-error="50 character maximum" data-success='ok'>50 character maximum</span>

                            </div>
                            <div className="input-field col m4 s6 xl2 l2">
                                <input type="date"  id='Start' className="validate black-text active" required={true} onChange={this.handleChange} />
                                <label htmlFor="date"  className='black-text active'>Start date</label>
                            </div>
                            <div className="input-field col m4 s6 xl2 l2">
                                <input type="date"  id='End' className="validate black-text active" required={true} onChange={this.handleChange}/>
                                <label htmlFor="date" className='black-text active'>End date</label>
                            </div>

                    </div>
                    <div className="row">
                        <div className="input-field col m12 s12 xl12 l12">
                        <textarea id="Description" className="materialize-textarea black-text" onChange={this.handleChange} ></textarea>
                        <label htmlFor="Description" className='black-text'>Project Description</label>
                        </div>
                    </div>
                    <p id='large' className='black-text hide-on-med-and-down'></p>
                    <p id='small' className='black-text hide-on-large-only'></p>
                    <button type="submit" className='btn blue darken-1'>Create Project</button>
                    <br/>
                    
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
