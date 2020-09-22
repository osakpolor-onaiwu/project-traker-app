import axios from 'axios'
 
const signUpAction = ({username,email,password}) =>{
      return (dispatch)=>{
         //headers
         const config={
             headers:{
                 "Content-Type":"application/json"
             }
         }
     
         //Request body
         const body=JSON.stringify({username,email,password})
     
         axios.post("http://localhost:8000/api/auth/register",body,config)
         .then(res=>{
             dispatch({
                 type:"SIGNUP_SUCCESS",
                 createduser:res.data
             })
         })
         .catch(err=>{
             dispatch({
                 type:"SIGNUP_ERROR",
                 err
             })
         })
      };
}

export default signUpAction;
