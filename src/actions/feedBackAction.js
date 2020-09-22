import axios from 'axios'
const FeedBackAction = (feedback) => {
    return (dispatch)=>{
        axios.post('http://api/projectP/feedbacks',feedback)
        .then(()=>{
            dispatch({type:'FEEDBACK_SENT'})
            }
        ).catch(err=>{
            dispatch({type:'FEEDBACK_ERROR',err})
        }
        )
    }
}

export default FeedBackAction