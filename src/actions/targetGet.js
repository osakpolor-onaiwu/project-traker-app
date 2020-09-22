import axios from 'axios'
const TargetActionGet = (project_id) => {
   return (dispatch) => {
    axios.get('http://localhost:8000/api/projectP/Gettarget/',project_id)
    .then((response)=>{
        dispatch({
            type:"GET_TARGET",
            response:response.data
        })
    }).catch(err=>{
        dispatch({type:'GET_TARGET_ERROR',err})
    })
        
 }
}

export default TargetActionGet
