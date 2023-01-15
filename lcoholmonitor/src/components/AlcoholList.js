import './AlcoholList.css';


const AlcoholList = props => {

    let timeNow = new Date().getTime();

    let message = "Loading...";

    if (props.bac >= 0.08) {
        message = "Don't Even Think About It";
    } else if (props.bac < 0.08 && props.bac >= 0.05) {
        message = "Not Recommended to Drive";
    } else {
        message = "Safe to Drive";
    }

    return(
        <div className="grid-container">
            <div className="grid-item">
                <section className=''>
                    <h2 className="drinks-title">All Drinks</h2>
                    <ul>
                        {props.items.map(drink => (
                            <div className = "drinkCard" key={drink.id} onClick={props.onRemoveItem.bind(this,drink.id)}>
                                <span class = "alc-list">{drink.name.split("-")[0]} </span>
                                <span class = "alc-list">{"(Size: "+drink.size+")"}</span>
                                <span class = "alc-list" id = "time-since">{"⏳"+Math.round((parseInt(timeNow)/3600000 - (parseInt(drink.time)/3600000 - parseFloat(drink.diff))) * 100) / 100 + " hours ago"}</span>
                            </div>
                        ))}
                    </ul>
                </section>
            </div>
            <div className="grid-item" id="grid-4">
                <h1 class="decision">Can I drive? </h1>
                <h1 class="decision">{message}</h1>
            </div>
        </div>
        )
}

export default AlcoholList;