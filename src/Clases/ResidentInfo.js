import React ,{ useState, Fragment, useEffect } from "react";

function ResidentInfo({data}){

    const [nameResident, setNameResident] = useState("");
    const [statusResident, setStatusResident]= useState("");
    const [imageResident, setImageResident] = useState("");
    const [originResident, setOriginResident] = useState("");
    const [episodesResident, setEpisodesResident] = useState(0);

    useEffect(()=>{
        if(data) {
            setNameResident(data.name);
            setStatusResident(data.status);
            setImageResident(data.image);
            setOriginResident(data.origin.name);
            setEpisodesResident(data.episode.length);
        }
    },[data])
    
    return(
        <Fragment>        
            <div className="card">
                <div className="img">
                    <img  src={imageResident} width="325" height="325"/>
                </div>
                <div className="info">
                    <div className="nameAndStatus">
                        <h2>{nameResident}</h2>                   
                        <span>{statusResident}</span>
                    </div>
                    <div className="nameAndStatus">
                        <span>Lugar de origen</span>
                        <h5>{originResident}</h5>
                    </div>
                    <div className="nameAndStatus">
                        <span>Episodios </span>
                        <h5>{episodesResident}</h5>
                    </div>
                </div>
            </div>           
        </Fragment>
    );
}

export default ResidentInfo;