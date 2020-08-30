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
            return{
                ...state,
                target:action.response
            }
        default:
            return state
    }
};
export default TargetReducer;
