import axios from 'axios'


const TargetDelete = (id) => {
  return (dispatch)=>{
    axios.delete(`http://localhost:8000/api/projectP/Gettarget/${id}/`)
    .then(res=>(
      dispatch({
        type:"DELETE_TARGET",
        res:id
      }
    )
      )
    )
  }
}

export default TargetDelete