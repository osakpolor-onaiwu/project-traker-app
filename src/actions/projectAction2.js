import axios from 'axios'
import TokenConfig from './tokenConfig'
const ProjectActionGet = () => {
   return (dispatch,getState) => {
    axios.get('http://localhost:8000/api/projectP/projects/',TokenConfig(getState))
    .then((response)=>{
        dispatch({
            type:"GET_PROJECT",
            response:response.data
        })
    }).catch(err=>{
        dispatch({type:'GET_PROJECT_ERROR',err})
    })

 }
}

export default ProjectActionGet
