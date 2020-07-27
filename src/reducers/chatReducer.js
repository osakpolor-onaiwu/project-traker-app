const initialState = {
    chat: [
        { id: 1, content: "play pes"},
    ],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_CHAT":
            console.log("chat created", action.chat);
            return state;
        case "CREATE_CHAT_ERROR":
            console.log("create chat error",action.err);
            return state;
        default:
            return state
    }
    // here we handle all project action types, so we could have used if statement,
    // but since there can be many type of  actions, we use switch statement and  return something for
    // eact case. so we are saying if the action type is CREATE_PROJECT, do this
};
export default chatReducer;
