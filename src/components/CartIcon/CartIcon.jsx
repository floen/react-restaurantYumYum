import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import './CartIcon.css'

function CartIcon() {
    const navigate = useNavigate();

    const cart = useSelector((state) => {
        return state.cart;
    });

    const cartAmount = CartAmount();

    function CartAmount() {
        let amount = 0;
        cart.cartItems.forEach(element => {
            amount += element.amount;
        });
        return amount;
    };


    function NavigateToCart() {
        navigate("/cart");
    }
    return (
        <div className="wrap-cart-icon">
            <div className="wrap-cart-counter">
                <p className="cart-counter">{cartAmount == 0 ? "" : cartAmount} </p>
            </div>
            <img heigh={70} width={70} className="cart-icon" src="/cart.png" onClick={NavigateToCart} />
        </div>

    );
}
export default CartIcon;