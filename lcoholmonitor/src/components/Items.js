import { useState } from "react";

import Form from "./Form";

const Items = props => {

    const [items, setItems] = useState([]);

    const addAlcoholHandler = item => {
        setItems(prevItems => [...prevItems, {...item}]);
        console.log(items);

    }

    return (
        <>
           <Form onAddItem={addAlcoholHandler}/> 
        </>
    )
}

export default Items;