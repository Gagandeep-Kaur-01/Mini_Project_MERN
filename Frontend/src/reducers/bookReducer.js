import { bookConstant } from "../constants"

const initialState = {
    bookDetail: []
}

export const book = (state = initialState, action) => {
    switch(action.type){
        case bookConstant.GET_ALL_BOOK_DETAIL:
            return {
                ...state,
                bookDetail: action.response 
            };
        default: 
          return state;    
    }
};