const signUpAction = (newUser) =>{
   return (dispatch,getState,{getFirebase, getFirestore})=>{
       const firebase=getFirebase();
       const firestore=getFirestore()

       firebase.auth().createUserWithEmailAndPassword(
           newUser.email,
           newUser.password
       ).then((resp)=>{
           return firestore.collection('users').doc(resp.user.uid).set({
               firstName:newUser.firstName,
               lastName:newUser.lastName,
               fullName:newUser.firstName + ' '+ newUser.lastName,
               createdAt:new Date()
           })
       }).then(()=>{
           dispatch({type:'SIGNUP_SUCCESS'})
       }).catch((err)=>{
           return (dispatch({type:'SIGNUP_FAILED', err:err}))
       })
   }
}

export default signUpAction;
