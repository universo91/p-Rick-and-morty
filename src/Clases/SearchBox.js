import React,{ Fragment } from "react";

function SearchBox({ handleChange, handleClick }){
    
    return(
        <Fragment>
            <div className="form-inline searchBox">
                <span>Ingrese id de ubicacion: </span>
                <input className="form-control ml-2 mr-2" onChange={handleChange}/>
                <button className = "btn btn-primary buton"onClick={handleClick}>Buscar ubicacion</button>
            </div>
        </Fragment>
    );
}

export default SearchBox;