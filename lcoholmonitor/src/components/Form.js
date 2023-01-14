
import { useState } from "react";

const Form = props => {
    
    const [sex, setSex] = useState("male");
    const [weight, setWeight] = useState("");
    const [drinkType, setDrinkType] = useState("");
    const [drinkSize, setDrinkSize] = useState("shot");


    const submitHandler = event => {
        event.preventDefault();
        props.onAddItem({
            name: drinkType,
            sex: sex,
            size: drinkSize,
            weight: weight
        });
    }
    
    return (
        <section className=''>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Sex</label>
                    <select value={sex} onChange={event => setSex(event.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </div>
                <div className=''>
                    <label>Weight (kg)</label>
                    <input type="number" id="amount" value={weight} onChange={event => setWeight(event.target.value)} />
                </div>
                <div className=''>
                    <label>Drink Type</label>
                    <input type="text" id="amount" value={drinkType} onChange={event => setDrinkType(event.target.value)} />
                </div>
                <div>
                    <label>Drink Size</label>
                    <select value={drinkSize} onChange={event => setDrinkSize(event.target.value)}>
                    <option value="shot">Shot</option>
                    <option value="wine">Wine Glass</option>
                    <option value="beer">Beer Cup</option>
                    <option value="other">Product Size</option>
                    </select>
                </div>
                <div className=''>
                    <button type="submit">Add Item</button>
                </div>
            </form>
        </section>
    )
}

export default Form;