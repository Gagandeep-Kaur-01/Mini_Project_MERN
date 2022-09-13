import React, {useState, useEffect} from "react";
import axios from "axios";

const BooksDetail = () => {
  const [detail, setDetail] = useState([]);



  useEffect(() => {
    axios.get("http://localhost:5000/aliens/")
    .then(response => {
      setDetail(response?.data);
    });
  },[])

    return (
        <div>           
            {detail?.map(item => item.name)}        
        </div>
    )
}

export default BooksDetail;