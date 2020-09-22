import axios from 'axios'
const TargetAction = (target) => {
   return (dispatch) => {
       console.log(target)
       axios.post(`http://localhost:8000/api/projectP/target/`,target)
      .then(()=>{
           dispatch({type: "CREATE_TARGET"});

           axios.get('http://localhost:8000/api/projectP/Gettarget/')
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
