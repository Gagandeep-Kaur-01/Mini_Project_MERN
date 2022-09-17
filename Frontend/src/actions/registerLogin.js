import axios from "axios";


export const registerNewUser = (payload) => {
    return (dispatch) => {
        axios
        .post("http://localhost:5000/api/register/", payload)
        .then(response => {
            return response;
    })
    .catch((err) => {
        console.log("----error-----", err)
    })
    }
}

export const LoginUser = (payload) => {
    return (dispatch) => {
        axios
        .post("http://localhost:5000/api/login/", payload)
        .then(response => {
            return response;
    })
    .catch((err) => {
        console.log("----error-----", err)
    })
    }
}




