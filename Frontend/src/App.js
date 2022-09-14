import { connect } from "react-redux";
import { BooksDetail }  from "./Components/booksDetail";

function App() {
  return (
    <div className="App">
      <BooksDetail />
     
    </div>
  );
}

export default connect()(App);

