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
                                <span>{drink.name}</span>
                                <span>{drink.size}</span>
                            </div>
                        ))}
                    </ul>
                </section>
            </div>
            <div className="grid-item">GRID #4
            </div>
        </div>
        )
}

export default AlcoholList;