import axios from "axios";
import { userConstant } from "../constants"


export const registerNewUser = (payload, cb) => {
    return (dispatch) => {
        axios
        .post("http://localhost:5000/api/register/", payload)
        .then(response => {
            alert(response?.data?.message);
            cb();
            return response;
    })
    .catch((err) => {
        console.log("----error-----", err)
    })
    }
}

export const getLoginDetailSucess = (res) => ({
    type: userConstant.GET_LOGIN_DETAIL,
    response: res
});

export const LoginUser = (payload, cb) => {
    return (dispatch) => {
        axios
        .post("http://localhost:5000/api/login/", payload)
        .then(response => {
            alert(response?.data?.message)
            dispatch(getLoginDetailSucess(response?.data?.user))
            cb()
    })
    .catch((err) => {
        console.log("----error-----", err)
    })
    }
}




