import { combineReducers } from "redux";
import { book } from "./bookReducer";

const rootReducer = combineReducers({
    book
});

export default rootReducer;