import axios from 'axios'
import TokenConfig from './tokenConfig'

const ChatAction = (chat) => {
   return (dispatch,getState) => {
        
       axios.post('http://localhost:8000/api/projectP/chats/',chat,TokenConfig(getState))
      .then(()=>{
           dispatch({type: "CREATE_CHAT"});
               axios.get('http://localhost:8000/api/projectP/chats/',TokenConfig(getState))
               .then((response)=>{
                   dispatch({
                       type:"GET_CHAT",
                       chat:response.data
                   })
               }).catch(err=>{
                   dispatch({type:'GETCHAT_ERROR',err})
               })
           }).catch((err)=>{
               dispatch({type: 'CREATECHAT_ERROR',err:err})
           })
        }
    }

export default ChatAction

