import axios from "axios";
import { notification, message } from "antd";
import { userConstant } from "../constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const apiErrorNew = (err) => 
// console.log("----err---", err)
//     notification['error']({ 
//         description: err.message || 'Something is wrong!' 
//     });

    const apiErrorNew = (err) => notification['error']({ description: err });


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

export const getLoginDetailSuccess = (res) => ({
    type: userConstant.GET_LOGIN_DETAIL,
    response: res
});

export const LoginUser = (payload, cb) => {
    return (dispatch) => {
        axios
        .post("http://localhost:5000/api/login/", payload)
        .then(response => {
            console.log("--message----", response?.data?.message)
            // notification['success']({
            //     description: response?.data?.message || 'Success!',
            //     onClick: () => {
            //         console.log('Notification Clicked!');
            //     },
            // });
            cb()
            dispatch(getLoginDetailSuccess(response?.data?.data))            
    })
    .catch((err) => {
        console.log("----error=-----", err?.response?.data?.message);
        toast(err?.response?.data?.message)
        // apiErrorNew(err?.response?.data?.message);       
    })
    }
}




