const initialState = {
    projects:[]
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("Poject created", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create project error",action.err);
            return state;

        case "GET_PROJECT":
            console.log("success",action.response)
            return{
                ...state,
                projects:action.response
            }
        case "GET_PROJECT_ERROR":
            console.log("error",action.err)

        case "DELETE_PROJECT":
            return{
                ...state,
                projects:state.projects.filter(pro=>{
                    return pro.id!==action.res
                })
            }

        default:
            return state
    }
};
export default projectReducer;
