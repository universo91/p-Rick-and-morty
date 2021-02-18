import React , { useState, useEffect, Fragment} from 'react';
import ResidentInfo from './ResidentInfo';
import axios from 'axios';

function ResidentContainer({urlResidents}) {

    const [idResidents, setIdResident] = useState([]);
    const [arrayResidents, setArrayResidents] = useState([]);

    useEffect( () => {
        let idResidentes = [];
        if( urlResidents){
            urlResidents.forEach( urlResident => {
                idResidentes.push(parseInt(urlResident.replace("https://rickandmortyapi.com/api/character/","")));
            });
            setIdResident(idResidentes);
        }
    },[urlResidents]);
    
    useEffect( () => {
        //console.log(idResidents);
        if(idResidents) {
            let x = [];
            if(idResidents.length !== 0 )
            {
                console.log(`resident=https://rickandmortyapi.com/api/character/${idResidents}`)
            const promise = axios.get(`https://rickandmortyapi.com/api/character/${idResidents}`);
            promise.then(response => {
                if(response.data.length) {
                    setArrayResidents(response.data);
                }  
                else{
                    x.push(response.data);
                    setArrayResidents(x);
                }            
                              
            } );
            }
           
        }
        
    },[idResidents]);

    return(
        <Fragment>
            
            {arrayResidents.length > 0 && arrayResidents[0] && <ResidentInfo data={arrayResidents[0]} />}
            {arrayResidents.length > 0 && arrayResidents[1] && <ResidentInfo data={arrayResidents[1]} />}
            {arrayResidents.length > 0 && arrayResidents[2] && <ResidentInfo data={arrayResidents[2]} />}
            {arrayResidents.length > 0 && arrayResidents[3] && <ResidentInfo data={arrayResidents[3]} />}
            {arrayResidents.length > 0 && arrayResidents[4] && <ResidentInfo data={arrayResidents[4]} />}
            {arrayResidents.length > 0 && arrayResidents[5] && <ResidentInfo data={arrayResidents[5]} />}
            {arrayResidents.length > 0 && arrayResidents[6] && <ResidentInfo data={arrayResidents[6]} />}
            {arrayResidents.length > 0 && arrayResidents[7] && <ResidentInfo data={arrayResidents[7]} />}
            {arrayResidents.length > 0 && arrayResidents[8] && <ResidentInfo data={arrayResidents[8]} />}
            {arrayResidents.length > 0 && arrayResidents[9] && <ResidentInfo data={arrayResidents[9]} />}
                
        </Fragment>
    );
}

export default ResidentContainer;