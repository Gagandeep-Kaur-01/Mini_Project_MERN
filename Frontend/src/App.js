import { connect } from "react-redux";
import { BooksDetail }  from "./Components/booksDetail";
import Homepage from "./Components/Homepage/homepage";
import Login from "./Components/Login/login";
import Register from "./Components/Register/register";
import "./App.css"

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}      
        <Login />
        {/* <Register /> */}
        {/* <BooksDetail />  */}  
    </div>
  );
}

export default connect()(App);

