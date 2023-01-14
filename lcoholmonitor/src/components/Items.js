import Form from "./Form";

const Items = props => {

    const addAlcoholHandler = item => {
        console.log(item);
    }

    return (
        <>
           <Form onAddItem={addAlcoholHandler}/> 
        </>
    )
}

export default Items;