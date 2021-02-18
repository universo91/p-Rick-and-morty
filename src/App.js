import React, { Fragment } from "react";
import "./style.css";
import LocationContainer from "./Clases/LocationContainer";

function App() {
  
  return (
    <Fragment>
      <h1 className="title">Rick and Morty</h1> 
      <div className="containerLocation">
          <LocationContainer/>             
      </div>
    </Fragment>
  );
}

export default App;
