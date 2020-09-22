import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import chatReducer from './chatReducer'
import { combineReducers } from "redux";
import TargetReducer from "./targetReducer";
import FeedReducer from "./feedReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    chat:chatReducer,
    project: projectReducer,
    target:TargetReducer,
    feedback:FeedReducer
});

export default rootReducer;
