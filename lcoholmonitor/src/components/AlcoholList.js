const AlcoholList = props => {
    return(
        <section className=''>
            <h2>All Drinks</h2>
            <ul>
                {props.items.map(drink => (
                    <li key={drink.id} onClick={props.onRemoveItem.bind(this,drink.id)}>
                        <span>{drink.name}</span>
                        <span>{drink.size}</span>
                    </li>
                ))}
            </ul>
        </section>    )
}

export default AlcoholList;