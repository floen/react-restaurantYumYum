import './product.css'
import { useDispatch } from "react-redux";
import { addToCart } from '../../reducers/cartReducer';
function Product(props) {

    const dispatch = useDispatch();
    function handleClick() {
        dispatch(addToCart({ id: props.id, quantity: 1 }));
    }
    return (
        <div className="productWrap">
            <h3>{props.name}</h3>
            <span className="dot"></span>
            <h3>{props.price}</h3>
            <p>{props.description}</p>
            <button onClick={handleClick}>Add to cart</button>

        </div>
    );
}
export default Product;