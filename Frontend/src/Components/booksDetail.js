import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions"

const BooksDetail = () => {

    const dispatch = useDispatch()

    const [detail, setDetail] = useState(["abc"]);

    const {bookDetail} = useSelector((state) => ({
        bookDetail: state?.book?.bookDetail

    }))

    console.log("--bookDetail----", bookDetail)



//   useEffect(() => {
//     axios.get("http://localhost:5000/books/")
//     .then(response => {
//       setDetail(response?.data);
//     });
//   },[])

    useEffect(() => {
        dispatch(actions.getAllBooksDetail())        
    }, [])

    return (
        <div>           
            {bookDetail?.map(item => item?.name)}        
        </div>
    )
}

const mapStateToProps = state => {
    console.log("state----", state)
    return {        
    }
}

const actionCreators = dispatch => {
    return {

    }
}

const connectedVendorInformation = connect(mapStateToProps, actionCreators)(BooksDetail);



export { connectedVendorInformation as BooksDetail };