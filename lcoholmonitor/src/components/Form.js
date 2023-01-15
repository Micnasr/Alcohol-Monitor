import { useState } from "react";
import './Form.css';
import GaugeChart from 'react-gauge-chart'

const Form = props => {
    
    const [sex, setSex] = useState("male");
    const [weight, setWeight] = useState(60);
    const [drinkType, setDrinkType] = useState("4.6");
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

    let bac = props.bac;

    if (bac > 0.1){
        bac = 0.1;
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
                            <input className = "input-title" type="number" min="1" max="200" id="amount" placeholder="Amount (Kg)" value={weight} onChange={event => setWeight(event.target.value)} />
                        </div>

                        <div className="input-container">
                        <select className = "input-title" value={drinkType} onChange={event => setDrinkType(event.target.value)}>
                        <option value="4.6">Corona</option>
                        <option value="5">Budweiser</option>
                        <option value="4.2">Bud Light</option>
                        <option value="40">Bacardi</option>
                        </select>
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

            <div className="grid-item">
                <GaugeChart id="gauge-chart1"
                textColor="#000000"
                arcsLength={[0.5, 0.35, 0.25]}
                percent={bac/0.1} 
                animateDuration	 = {1000}
                />
            </div>

            


        </div>

    )
}

export default Form;