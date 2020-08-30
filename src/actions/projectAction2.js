import axios from 'axios'
const ProjectActionGet = (project) => {
   return (dispatch) => {
    axios.get('http://localhost:8000/api/projects/')
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
