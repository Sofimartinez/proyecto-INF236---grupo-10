import React from "react";
import './assetss/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Login from "./components/Login";
import Header from "./routes/Header";

import {useSelector} from "react-redux";

function App() {
  const isLogged = useSelector((store) => store.authReducer.isLogged);
  console.log(isLogged)
  return isLogged ? ( 
    <div>
     <Header/>    
    </div> 
  ) : (
    <div>
      <Login/>
    </div>
  )
}

export default App;
