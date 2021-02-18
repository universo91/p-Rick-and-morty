import React, {Fragment} from "react";

function LocationInfo({nameLocation, typeLocation, dimensionLocation, quantityResidentLocation} ){
   
    return(
        <Fragment>
            <div>
                <ul className="lista">
                    <li><h4>Nombre: </h4>{nameLocation}</li>
                    <li><h4>Tipo: </h4>{typeLocation}</li>
                    <li><h4>Dimension: </h4>{dimensionLocation}</li>
                    <li><h4>Cantidad residentes: </h4>{quantityResidentLocation}</li>
                </ul>
            </div>
        </Fragment>
    );
}

export default LocationInfo;