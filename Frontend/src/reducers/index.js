import { combineReducers } from "redux";
import { book } from "./bookReducer";
import { user } from "./registerLogin"

const rootReducer = combineReducers({
    book,
    user
});

export default rootReducer;