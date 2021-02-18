import React, {useEffect, useState, Fragment, useCallback} from "react";
import axios from 'axios';
import SearchBox from "./SearchBox";
import LocationInfo from "./LocationInfo";
import ResidentContainer from "./ResidentContainer";

function LocationContainer(){

    const randomLocation = Math.floor( Math.random() * 108 ) + 1;

    const [idLocation, setIdLocation] = useState(randomLocation);
    const [nameLocation, setNameLocation] = useState("");
    const [typeLocation, setTypeLocation] = useState("");
    const [dimensionLocation, setDimensionLocation] = useState("");
    const [quantityResidentLocation, setQuantityResidentLocation] = useState(0);
    const [arrayUrlResidentsLocation, setArrayUrlResidentsLocation] = useState([])
    const [text, setText] = useState("");
    
    useEffect( () => {
        const promesa = axios(`https://rickandmortyapi.com/api/location/${idLocation}`);
        promesa
            .then(location => {
             //console.log(location)
             setNameLocation(location.data.name);
             setTypeLocation(location.data.type);
             setDimensionLocation(location.data.dimension);
             setQuantityResidentLocation(location.data.residents.length);
             setArrayUrlResidentsLocation(location.data.residents);
        });
    },[idLocation]);

    const handleChangeText = (event) => {
        setText(event.target.value);        
    }
    const handleSearchLocation = () => {
        setIdLocation(text);
    }
    
    return(
        <Fragment>
            <div className="infoLocation">
                <LocationInfo
                    nameLocation={nameLocation}
                    typeLocation={typeLocation}
                    dimensionLocation={dimensionLocation}
                    quantityResidentLocation={quantityResidentLocation}
                /> 
                <SearchBox handleChange={handleChangeText} handleClick={handleSearchLocation}/>           
                               
            </div>
            <hr/>
            <div className="ResidentContainer">
               <div className="ContainerCards">
                    <ResidentContainer urlResidents={arrayUrlResidentsLocation} />
               </div>
            </div>
            
        </Fragment>
      
    );
}

export default LocationContainer;