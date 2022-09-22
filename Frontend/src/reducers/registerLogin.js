import { userConstant } from "../constants"

const initialState = {
    userDetail: {}
}

export const user = (state = initialState, action) => {
    switch(action.type){
        case userConstant.GET_LOGIN_DETAIL:
            return {
                ...state,
                userDetail: action.response 
            };
        default: 
          return state;    
    }
};