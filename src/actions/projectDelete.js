import axios from 'axios'
import TokenConfig from './tokenConfig'
import {Redirect} from 'react-router-dom'


const ProjectDelete = (id) => {
  return (dispatch,getState)=>{
    axios.delete(`http://localhost:8000/api/projectP/projects/${id}/`,TokenConfig(getState))
    .then(res=>(
      dispatch({
        type:"DELETE_PROJECT",
        res:id
      })
      )
      
    )
  }
}

export default ProjectDelete