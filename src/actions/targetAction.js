import axios from 'axios'
const TargetAction = (target,project_id) => {
   return (dispatch) => {
       axios.post(`http://localhost:8000/api/target/${project_id}/`,target)
      .then(()=>{
           dispatch({type: "CREATE_TARGET"});
               axios.get(`http://localhost:8000/api/target/${project_id}/`)
               .then((response)=>{
                   dispatch({
                       type:"GET_TARGET",
                       response:response.data
                   })
               }).catch(err=>{
                   dispatch({type:'GET_TARGET_ERROR',err})
               })
           }).catch((err)=>{
               dispatch({type: 'CREATE_TARGET_ERROR',err:err})
           })

       
     
 }
}

export default TargetAction
