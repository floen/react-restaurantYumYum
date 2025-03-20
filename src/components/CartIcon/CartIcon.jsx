import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import './CartIcon.css'

function CartIcon() {
    const navigate = useNavigate();

    const cart = useSelector((state) => {
        return state.cart;
    });

    const cartQuantity = CartQuantity();

    function CartQuantity() {
        let quantity = 0;
        cart.cartItems.forEach(element => {
            quantity += element.quantity;
        });
        return quantity;
    };


    function NavigateToCart() {
        navigate("/cart");
    }
    return (
        <div className="wrap-cart-icon">
            <div className="wrap-cart-counter">
                <p className="cart-counter">{cartQuantity == 0 ? "" : cartQuantity} </p>
            </div>
            <img heigh={70} width={70} className="cart-icon" src="/cart.png" onClick={NavigateToCart} />
        </div>

    );
}
export default CartIcon;