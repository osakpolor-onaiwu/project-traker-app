 import axios from 'axios'
 import TokenConfig from './tokenConfig'

 const ProjectAction = (project) => {
    return (dispatch,getState) => {
         
        axios.post('http://localhost:8000/api/projectP/projects/',project,TokenConfig(getState))
       .then(()=>{
            dispatch({type: "CREATE_PROJECT"});
                axios.get('http://localhost:8000/api/projectP/projects/',TokenConfig(getState))
                .then((response)=>{
                    dispatch({
                        type:"GET_PROJECT",
                        response:response.data
                    })
                }).catch(err=>{
                    dispatch({type:'GET_PROJECT_ERROR',err})
                })
            }).catch((err)=>{
                dispatch({type: 'CREATE_PROJECT_ERROR',err:err})
            })



  }
}

export default ProjectAction
