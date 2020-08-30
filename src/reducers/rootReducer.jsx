import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import chatReducer from './chatReducer'
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    auth: authReducer,
    chat:chatReducer,
    project: projectReducer,
});

export default rootReducer;
