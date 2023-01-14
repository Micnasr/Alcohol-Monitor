const AlcoholList = props => {
    return(
        <section className=''>
            <h2>Shopping List</h2>
            <ul>
                {props.items.map(item => (
                    <li key={item.id} onClick={props.onRemoveItem.bind(this,item.id)}>
                        <span>{item.name}</span>
                        <span>{item.size}</span>
                    </li>
                ))}
            </ul>
        </section>    )
}

export default AlcoholList;