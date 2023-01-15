import './AlcoholList.css';


const AlcoholList = props => {

    

    return(
        <div className="grid-container">
            <div className="grid-item">
                <section className=''>
                    <h2 className="drinks-title">All Drinks</h2>
                    <ul>
                        {props.items.map(drink => (
                            <div className = "drinkCard" key={drink.id} onClick={props.onRemoveItem.bind(this,drink.id)}>
                                <span>{drink.name.split("-")[0]} </span>
                                <span>{"("+drink.size+")"}</span>
                            </div>
                        ))}
                    </ul>
                </section>
            </div>
            <div className="grid-item" id="grid-4">
                <h1 class="decision">Can I drive? </h1>
            </div>
        </div>
        )
}

export default AlcoholList;