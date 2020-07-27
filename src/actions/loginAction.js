import { getFirebase } from "react-redux-firebase"
 const LoginAction=(credentials)=>{
 return (dispatch,getState,{getFirebase})=>{
    const firebase=getFirebase();
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(()=>{
        dispatch({type:'LOGIN_SUCCESS'})
    }).catch((err)=>{
        dispatch({type:'LOGIN_ERROR',err:err})
    })
 }

}


export default LoginAction



//note the credential here refers to the email and password of the user,
//just like projects in project action refers to title and content
