import axios from 'axios'



//Login User
 const LoginAction=(username,password)=>{
 return (dispatch)=>{
    //headers
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    //Request body
    const body=JSON.stringify({username,password})

    axios.post("http://localhost:8000/api/auth/login",body,config)
    .then(res=>{
        dispatch({
            type:"LOGIN_SUCCESS",
            user:res.data
        })
    })
    .catch(err=>{
        dispatch({
            type:"LOGIN_ERROR",
            err:err.response.data.non_field_errors
        })
    })
 };

}


export default LoginAction



