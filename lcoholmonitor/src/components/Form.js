import { useState } from "react";
import './Form.css';
import GaugeChart from 'react-gauge-chart'

const Form = props => {
    
    //Store user's sex
    const [sex, setSex] = useState("male");
    //Store user's weight in kgs
    const [weight, setWeight] = useState(60);
    //Store the drink type
    const [drinkType, setDrinkType] = useState("Corona-4.6");
    //Store the drink size
    const [drinkSize, setDrinkSize] = useState("shot");

    const [currentTime, setCurrentTime] = useState(new Date().getTime());
    const [timeDiff, setTimeDiff] = useState(0);

    //Function responsible in sending the form data to the parent components
    const submitHandler = event => {
        event.preventDefault();
        setCurrentTime(new Date().getTime());
        props.onAddItem({
            name: drinkType,
            sex: sex,
            size: drinkSize,
            weight: weight,
            time: currentTime,
            diff: timeDiff
        });
    }

    //Restrict the bac to go above 100% limit
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
                        <option value="Corona-4.6">Corona</option>
                        <option value="Budweiser-5">Budweiser</option>
                        <option value="Bud Light-4.2">Bud Light</option>
                        <option value="Bacardi-40">Bacardi</option>
                        <option value="Smirnoff-37.5">Smirnoff Red Label</option>
                        <option value="Hennessy-40">Hennessy</option>
                        <option value="Absolut-50">Absolut</option>
                        <option value="Guinness-4.2">Guinness</option>
                        <option value="Twisted Tea-5">Twisted Tea</option>
                        <option value="Margarita-20">Margarita</option>
                        <option value="Tequila-40">Tequila</option>
                        <option value="Bloody Mary-10">Bloody Mary</option>
                        <option value="Jack Daniels-40">Jack Daniels</option>
                        <option value="Martini-28.7">Martini</option>
                        <option value="Mojito-13">Mojito</option>
                        <option value="Jameson-40">Jameson</option>
                        <option value="Arak-53">Arak</option>
                        <option value="Water-0">Water</option>
                        </select>
                        </div>

                        <div className="input-container">
                        <select className = "input-title" value={drinkSize} onChange={event => setDrinkSize(event.target.value)}>
                        <option value="shot">Shot</option>
                        <option value="wine glass">Wine Glass</option>
                        <option value="beer cup">Beer Cup</option>
                        </select>
                        </div>

                        <div className="input-container">
                        <select className = "input-title" value={timeDiff} onChange={event => setTimeDiff(event.target.value)}>
                        <option value={0}>Now</option>
                        <option value={0.25}>15 min ago</option>
                        <option value={0.5}>30 min ago</option>
                        <option value={1}>1 hour ago</option>
                        <option value={2}>2 hours ago</option>
                        <option value={3}>3 hours ago</option>
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