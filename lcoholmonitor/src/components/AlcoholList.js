import './AlcoholList.css';


const AlcoholList = props => {

    let timeNow = new Date().getTime();

    let message = "Loading...";

    //Print Specific Message Depending on Blood Alcohol Concentration
    if (props.bac >= 0.08) {
        message = "🛑 Don't Even Think About It 🛑";
    } else if (props.bac < 0.08 && props.bac >= 0.05) {
        message = "🟡 Not Recommended to Drive 🟡";
    } else {
        message = "🟢 Safe to Drive 🟢";
    }

    return(
        <div className="grid-container">
            <div className="grid-item">
                <section className=''>
                    <h2 className="drinks-title">All Drinks</h2>
                    <ul>
                        {props.items.map(drink => (
                            <div className = "drinkCard" key={drink.id} onClick={props.onRemoveItem.bind(this,drink.id)}>
                                <span className = "alc-list">{drink.name.split("-")[0]} </span>
                                <span className = "alc-list">{"(Size: "+drink.size+")"}</span>
                                <span className = "alc-list" id = "time-since">{"⏳"+Math.round((parseInt(timeNow)/3600000 - (parseInt(drink.time)/3600000 - parseFloat(drink.diff))) * 100) / 100 + " hours ago"}</span>
                            </div>
                        ))}
                    </ul>
                </section>
            </div>
            <div className="grid-item" id="grid-4">
                <h1 className="decision">Can I drive? </h1>
                <h1 className="decision">{message}</h1>
            </div>
        </div>
        )
}

export default AlcoholList;