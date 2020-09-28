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
        project:null
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value,
          project:this.props.project_id
        })
      }

      handleSubmit=(e)=>{
        e.preventDefault();
        this.props.TargetAction(this.state)
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

                            <div className="input-field col s12 m12 xl12 l12">
                                <textarea id="Target" className="materialize-textarea black-text" onChange={this.handleChange} ></textarea>
                                <label htmlFor="Description" className='black-text'>Target</label>
                            </div>

                            <div className="input-field col s6 m4 xl2 l2">
                                <input type="date"  id='Start' className="validate black-text active" required={true} onChange={this.handleChange} />
                                <label htmlFor="date" className=' active black-text'>Start date</label>
                            </div>
                            <div className="input-field col s6 m4 xl2 l2">
                                <input type="date"  id='End' className="validate black-text active" required={true} onChange={this.handleChange}/>
                                <label htmlFor="date" className='active black-text'>End date</label>
                            </div>

                    </div>

                    <div><p id='create' className='black-text'></p></div>
                    <button style={{marginBottom:15}} type="submit" className='btn blue darken-4'>Add target</button>
                </form>


            </div>

        )
    }
}

const mapDispatchToProps =(dispatch)=> {
  return{
    TargetAction:(target)=>{dispatch(TargetAction(target))},
    ProjectActionGet:()=>{dispatch(ProjectActionGet())}
  }
 }

export default connect(null,mapDispatchToProps) (ProjectTarget)
