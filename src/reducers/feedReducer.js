const initialState = {

}

const FeedReducer =(state = initialState, action) => {
    switch (action.type) {

    case 'FEEDBACK_SENT':
        return { ...state}


    case 'FEEDBACK_ERROR':
        console.log(action.err)
        return {
            ...state
        }

    default:
        return state
    }
}

export default FeedReducer