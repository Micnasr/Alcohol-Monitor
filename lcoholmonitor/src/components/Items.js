import { useState, useEffect } from "react";

import Form from "./Form";

const Items = props => {

    const [items, setItems] = useState([]);

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

    return (
        <>
           <Form onAddItem={addAlcoholHandler}/> 
        </>
    )
}

export default Items;