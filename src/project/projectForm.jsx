import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize'
import $ from 'jquery'
import ProjectAction from '../actions/projectAction'
import {connect} from 'react-redux'

class ProjectForm extends Component {
    state={
        ProjectTitle:'',
        fullStartDate:null,
        fullEndDate:null,
        Description:'',
        Target1:'',
        Target2:'',
        Target3:'',
        Target4:'',
        Target5:'',
        startdate1:null,
        startdate2:null,
        startdate3:null,
        startdate4:null,
        startdate5:null,
        enddate1:null,
        enddate2:null,
        enddate3:null,
        enddate4:null,
        enddate5:null,

    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }

      handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        this.props.ProjectAction(this.state)

      }

    handleTarget=(id,text,startid,endid)=>{
        return(
            <div class="row">
                <div class="input-field col l8">
                    <input id={id} type="text" class="validate white-text" onChange={this.handleChange}/>
                    <label for={id}>{text}</label>
                </div>
                <div class="input-field col l2">
                    <input type="date"  id={startid} class="white-text validate" onChange={this.handleChange}/>
                    <label for="date">Start date</label>
                </div>
                <div class="input-field col l2">
                    <input type="date"  id={endid} class="white-text validate" onChange={this.handleChange}/>
                    <label for="date">End date</label>
                </div>
            </div>
        )
    }

    componentDidMount(){
        $('#Description').val('');
        M.textareaAutoResize($('#Description'));
    }

    render() {
        return (

            <div class="">
                <form class="col l12" onSubmit={this.handleSubmit}>
                    <div class="row">
                            <div class="input-field col l8">
                                <input id="ProjectTitle" type="text" class="white-text validate" onChange={this.handleChange}/>
                                <label for="ProjectTitle">Project Title</label>
                            </div>
                            <div class="input-field col l2">
                                <input type="date"  id='fullStartDate' class="validate white-text" onChange={this.handleChange} />
                                <label for="date">Start date</label>
                            </div>
                            <div class="input-field col l2">
                                <input type="date"  id='fullEndDate' class="validate white-text" onChange={this.handleChange}/>
                                <label for="date">End date</label>
                            </div>

                    </div>
                    <div class="row">
                        <div class="input-field col l12">
                        <textarea id="Description" class="materialize-textarea white-text" onChange={this.handleChange} ></textarea>
                        <label for="Description">Project Description</label>
                        </div>
                    </div>
                    {this.handleTarget('Target1','Target 1','startdate1','enddate1')}
                    {this.handleTarget('Target2','Target 2','startdate2','enddate2')}
                    {this.handleTarget('Target3','Target 3','startdate3','enddate3')}
                    {this.handleTarget('Target4','Target 4','startdate4','enddate4')}
                    {this.handleTarget('Target5','Target 5','startdate5','enddate5')}
                    <button type="submit" className='btn blue darken-1'>Create Project</button>
                </form>
            </div>

        )
    }
}

const mapDispatchToProps =(dispatch)=> {
  return{
    ProjectAction:(project)=>{dispatch(ProjectAction(project))}
  }
 }

export default connect(null,mapDispatchToProps) (ProjectForm)
