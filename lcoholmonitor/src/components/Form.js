
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

                        <div className = "inner-container">
                            <div className = "inner-item" id ="inputTitle">
                                <label className="">Sex</label>
                            </div>
                            <div className = "inner-item">
                                <select value={sex} onChange={event => setSex(event.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className = "inner-container">
                            <div className = "inner-item" id ="inputTitle">
                                <label className="">Weight (kg)</label>
                                </div>
                                <div className = "inner-item">
                                <input type="number" id="amount" value={weight} onChange={event => setWeight(event.target.value)} />
                            </div>
                        </div>

                        <div className = "inner-container">
                            <div className = "inner-item" id ="inputTitle">
                                <label className="" >Drink Type</label>
                            </div>
                            <div className = "inner-item">
                                <input type="text" id="amount" value={drinkType} onChange={event => setDrinkType(event.target.value)} />
                            </div>
                        </div>

                        <div className = "inner-container">
                            <div className = "inner-item" id ="inputTitle"> 
                                <label className="">Drink Size</label>
                            </div>
                            <div className = "inner-item">
                                <select value={drinkSize} onChange={event => setDrinkSize(event.target.value)}>
                                <option value="shot">Shot</option>
                                <option value="wine">Wine Glass</option>
                                <option value="beer">Beer Cup</option>
                                <option value="other">Product Size</option>
                                </select>
                            </div>
                        </div>

                        <div className=''>
                            <button type="submit">Add Item</button>
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