import { useState } from "react";
import './Form.css';

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
        <div className="grid-container">
            <div className="grid-item">
                <section className="">
                    <form onSubmit={submitHandler}>
                        <div className="input-container">
                            <select className = "input-title" value={sex} onChange={event => setSex(event.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <input className = "input-title" type="number" id="amount" placeholder="Amount (Kg)" value={weight} onChange={event => setWeight(event.target.value)} />
                        </div>

                        <div className="input-container">
                        <input className = "input-title" type="text" id="amount" placeholder="Drink Type" value={drinkType} onChange={event => setDrinkType(event.target.value)} />
                        </div>

                        <div className="input-container">
                        <select className = "input-title" value={drinkSize} onChange={event => setDrinkSize(event.target.value)}>
                        <option value="shot">Shot</option>
                        <option value="wine">Wine Glass</option>
                        <option value="beer">Beer Cup</option>
                        <option value="other">Product Size</option>
                        </select>
                        </div>

        
                        <div className="button-container">
                            <button className = "button-submit" type="submit">Add Item</button>
                        </div>
                    </form>
                </section>
            </div>

            <div className="grid-item"> GRID #2
            </div>


        </div>

    )
}

export default Form;