export default function Product(props) {
    const formattedPrice = props.price/100
    return (
        <div className="product">
            <img className="product-image" width="272" height="300" alt={props.name} src={props.image} />
            <p className="product-name">{props.name}</p>
            <div className="product-price">{'$'+formattedPrice.toFixed(2)}</div>
        </div>
    );
}
