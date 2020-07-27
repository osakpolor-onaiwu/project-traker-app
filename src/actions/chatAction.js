 const ChatAction = (chat) => {
    return (dispatch, getState, {getFirebase,getFirestore}) => {
        //make call to database
        const firestore=getFirestore();
        // this gives us access to the collection (projects) that we created in firestore
        const profile=getState().firebase.profile;
        //we are getting the profile object proerty in firebase
        const authorId=getState().firebase.auth.uid
        //here we are getting the auth property and then the uid property inside the auth property in our state
        firestore.collection('chats').add({
            ...chat,
            authorFirstName: profile.firstName,
            authorLastName:profile.lastName,
            authorFullName:profile.firstName +''+ profile.lastName,
            authorId:authorId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type: "CREATE_CHAT", chat: chat});
            }).catch((err)=>{
                dispatch({type: 'CREATE_CHAT_ERROR',err:err})
            })
    }
}

export default ChatAction
