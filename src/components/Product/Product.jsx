function Product(props) {
    return
    (
        <section>
            <h3>{props.name}</h3>
            <span classname:dot></span>
            <h3>{props.price}</h3>
            <p>{props.ingredients}</p>
        </section>
    );
}
export default Product;