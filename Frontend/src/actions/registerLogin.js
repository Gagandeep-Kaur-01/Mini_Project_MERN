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

