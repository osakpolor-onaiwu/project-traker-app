import axios from 'axios'
import TokenConfig from './tokenConfig'
const ChatActionGet = () => {
   return (dispatch,getState) => {
    axios.get('http://localhost:8000/api/projectP/chats/',TokenConfig(getState))
    .then((response)=>{
        dispatch({
            type:"GET_CHAT",
            chat:response.data
        })
    }).catch(err=>{
        dispatch({type:'GETCHAT_ERROR',err})
    })

 }
}

export default ChatActionGet
