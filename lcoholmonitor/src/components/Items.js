import { useState, useEffect } from "react";

import Form from "./Form";
import AlcoholList from "./AlcoholList";

const Items = props => {

    //Object Array storing all drinks
    const [items, setItems] = useState([]);

    //Store the current Blood Alcohol Concentrations
    const [result, setResult] = useState(0);

    //Run this once when the page is reloaded
    useEffect(() => {
        //Fetch the drinks data from the backend database
        fetch('https://alcohol-monitor-8b753-default-rtdb.firebaseio.com/items.json').then(
        //converts response from json to a JS object
        response => response.json()
        ).then(responseData => {
        const loadedItems = [];
        
        //fill object array with the database's data
        for (const key in responseData){
            loadedItems.push({
                id: key,
                name: responseData[key].name,
                sex: responseData[key].sex,
                size: responseData[key].size,
                weight: responseData[key].weight,
                time: responseData[key].time,
                diff: responseData[key].diff
            });
        }
        
        //update State with the fetched items
        setItems(loadedItems);

    });
    }, []);

    const addAlcoholHandler = item => {   
        //add to database (firebase)
        fetch('https://alcohol-monitor-8b753-default-rtdb.firebaseio.com/items.json', {
            //Sending Data
            method: 'POST',
            //Converts the item object to json
            body: JSON.stringify(item),
            //(This is for firebase to understand)
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            //convert the response that is in JSON back to a JS object
            return response.json();
        }).then(responseData => {
            //add items from Form to the array (locally) when added to database
            setItems(prevItems => [...prevItems, {id: responseData.name, ...item}]);
        });    
        
    }

    //Delete the clicked drink from object array & database
    const removeAlcoholHandler = itemID => {
        fetch(`https://alcohol-monitor-8b753-default-rtdb.firebaseio.com/items/${itemID}.json`, {
            method: 'DELETE',            
        });

        setItems(prevItems =>
            prevItems.filter(item => item.id !== itemID)
        );
    }
    
    //Calculate BAC Levels everytime we update the drinks list
    useEffect(() => {
        let grams_alcohol = 0;
        const shot = 44.4;
        const wine = 147.9;
        const beer = 354.9;
        const density_alc = 0.789;
        let r_value = 0.55;
        let BAL = 0;

        let timeNow = new Date().getTime();
    
        let volume = 0;

        //Change gender modifier constant with whatever was chosen
        for (let i = 0; i < items.length; i++){
            if (items[0].sex === "male"){
                r_value = 0.68;
              }

            //convert standardized drink sizes to volumes
            if(items[i].size === "shot"){
                volume = shot;
            } else if (items[i].size === "wine glass"){
                volume = wine;
            } else if (items[i].size === "beer cup"){
                volume = beer;
            } 

            //Calculate Time difference since drink
            let differenceInMilliseconds = parseInt(timeNow) - (parseInt(items[i].time) - parseFloat(items[i].diff)*3600000);
            let differenceInHours = (differenceInMilliseconds / 3600000);
            let hours = (differenceInHours);

            //Formula to Calculate Blood Level Alcohol
            grams_alcohol = volume * (parseFloat(items[i].name.split("-")[1])/100) * density_alc;
            BAL += Math.round((((grams_alcohol / (parseFloat(items[0].weight) * 1000 * r_value)) * 100) + Number.EPSILON) * 10000) / 10000;            
            BAL = BAL - (BAL * 0.015 * hours);
        }
        
        //Update hook with final calculated value
        setResult(BAL);
    
    }, [items]); 

    return (
        <>
           <Form onAddItem={addAlcoholHandler} bac={result}/> 
           <AlcoholList items={items} onRemoveItem={removeAlcoholHandler} bac={result}/>
        </>
    )
}

export default Items;