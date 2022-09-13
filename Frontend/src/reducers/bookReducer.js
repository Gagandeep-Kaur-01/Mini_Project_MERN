export default (state, action) => {
    switch(action.type){
        case "GET_BOOK_DETAIL":
            return {
                bookDetail: action.payload 
            };
        default: 
          return state;    
    }
}