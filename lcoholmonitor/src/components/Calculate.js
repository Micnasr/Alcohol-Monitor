import { useState, useEffect } from "react";
import React from 'react';


const Calculate = props => {
    const [result, setResult] = useState(0);
    
    useEffect(() => {
        let blood_alcohol_content = 0;
        let grams_alcohol = 0;
        const shot = 44.4;
        const wine = 147.9;
        const beer = 354.9;
        const other = 305.0;
        const density_alc = 0.789;
        let gender = "";
        let r_value = 0.55;
    
        
        /*
        * Parameter weight is pulled from user input
        * Parameter volume is searched from json file
        * Parameter alc_perc is searched from json file
        */
    
       let volume = 0;
       let result = 0;

        for (let i = 0; i < props.items.length; i++){
    
            fetch('.././al_data.json'
            ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
                }
                ).then(function(response){
                return response.json();
            }).then(function(data) {
                for (let j = 0; j < data.length; j++) {
                    if (props.items[i].name.toLocaleLowerCase() == data[j].Drink.toLocaleLowerCase()){
                        grams_alcohol = volume * ((data[j].Percentage)/100) * density_alc;
                        setResult(prev => prev + Math.round((((grams_alcohol / (parseFloat(props.items[0].weight) * 1000 * r_value)) * 100) + Number.EPSILON) * 10000) / 10000);
                        return;
                    }
                }
            });
    
    
            if(props.items[i].size === "shot"){
                volume = shot;
            } else if (props.items[i].size === "wine"){
                volume = wine;
            } else if (props.items[i].size === "beer"){
                volume = beer;
            } else {
                volume = other;
            }
            
        }
    
    }, [props.items]); 
    
    return (
        <div>{result}</div>
    )
  }

  export default Calculate;