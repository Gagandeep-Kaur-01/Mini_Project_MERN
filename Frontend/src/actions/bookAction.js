import axios from "axios";
import { bookConstant } from "../constants"

export const getBookDetailSucess = (res) => ({
    type: bookConstant.GET_ALL_BOOK_DETAIL,
    response: res
});

export const getAllBooksDetail = () => {
    return (dispatch) => {
        axios
        .get("http://localhost:5000/api/books/")
        .then(response => {
        dispatch(getBookDetailSucess(response?.data))
    })
    .catch((err) => {
        console.log("----error-----", err)
    })
    }
}