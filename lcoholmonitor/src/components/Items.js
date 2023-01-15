import { useState, useEffect } from "react";

import Form from "./Form";
import AlcoholList from "./AlcoholList";

const Items = props => {

    const [items, setItems] = useState([]);
    const [result, setResult] = useState(0);

    useEffect(() => {
        fetch('https://alcohol-monitor-8b753-default-rtdb.firebaseio.com/items.json').then(
        //converts response from json to a JS object
        response => response.json()
        ).then(responseData => {
        const loadedItems = [];
        
        //fill array with the database's data
        for (const key in responseData){
            loadedItems.push({
                id: key,
                name: responseData[key].name,
                sex: responseData[key].sex,
                size: responseData[key].size,
                weight: responseData[key].weight
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
            //add items from ItemForm to the array (locally) when added to database
            setItems(prevItems => [...prevItems, {id: responseData.name, ...item}]);
        });    
        
        console.log(items);

    }

    const removeAlcoholHandler = itemID => {
        fetch(`https://alcohol-monitor-8b753-default-rtdb.firebaseio.com/items/${itemID}.json`, {
            method: 'DELETE',            
        });

        setItems(prevItems =>
            prevItems.filter(item => item.id !== itemID)
        );
    }
    
    useEffect(() => {
        let grams_alcohol = 0;
        const shot = 44.4;
        const wine = 147.9;
        const beer = 354.9;
        const other = 305.0;
        const density_alc = 0.789;
        let r_value = 0.55;
        let BAL = 0;

        /*
        * Parameter weight is pulled from user input
        * Parameter volume is searched from json file
        * Parameter alc_perc is searched from json file
        */
    
       let volume = 0;

        for (let i = 0; i < items.length; i++){
            if (items[0].sex === "male"){
                r_value = 0.68;
              }

            
            if(items[i].size === "shot"){
                volume = shot;
            } else if (items[i].size === "wine"){
                volume = wine;
            } else if (items[i].size === "beer"){
                volume = beer;
            } else {
                volume = other;
            }
            grams_alcohol = volume * (parseFloat(items[i].name.split(" ")[1])/100) * density_alc;
            BAL += Math.round((((grams_alcohol / (parseFloat(items[0].weight) * 1000 * r_value)) * 100) + Number.EPSILON) * 10000) / 10000;            
        }

        setResult(BAL);
    
    }, [items]); 

    return (
        <>
           <Form onAddItem={addAlcoholHandler} bac={result}/> 
           <AlcoholList items={items} onRemoveItem={removeAlcoholHandler}/>
        </>
    )
}

export default Items;