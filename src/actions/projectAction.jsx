 import axios from 'axios'
 const ProjectAction = (project) => {
    return (dispatch) => {
        axios.post('http://localhost:8000/api/projects/',project)
       .then(()=>{
            dispatch({type: "CREATE_PROJECT"});
                axios.get('http://localhost:8000/api/projects/')
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
