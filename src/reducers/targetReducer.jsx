const initialState = {
    target:[]
};

const TargetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TARGET":
            console.log("target created", action.response);
            return state;
        case "CREATE_TARGET_ERROR":
            console.log("create target error",action.err);
            return state;
        case "GET_TARGET":
            console.log(action.target)
            return{
                ...state,
                target:action.response
            }
        case 'GET_TARGET_ERROR':
            console.log(action.err)
            return{
                ...state
            }

        case 'DELETE_TARGET':
            console.log(action.res)
            return{
                ...state,
                target:state.target.filter((tar)=>{
                    return tar.id!==action.res
                })
            }
        default:
            return state
    }
};
export default TargetReducer;
