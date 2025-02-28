import './Cart.css'
import { useGetMenuByIdQuery, usePostOrderMutation } from "../api/apiSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { removeFromCart, setCartOrderId } from '../reducers/cartReducer'
import Header from '../components/Header/Header'

function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [createOrder, { isLoading, isSuccess, isError, error }] = usePostOrderMutation();
    const cart = useSelector((state) => {
        return state.cart;
    });


    var totalPrice = 0;
    var errorMessageForOrder = "";
    const cartComponents = cart.cartItems.map((item) => {
        if (cart.cartItems.length > 0 && item.id != "") {
            const { data, isError, isLoading } = useGetMenuByIdQuery(item.id);
            totalPrice += (parseInt(data?.item.price) * item.quantity);
            return (
                isLoading ?
                    (<p>Loading</p>)
                    : (isError ?
                        (
                            <p>Something is wrong</p>
                        ) :
                        (
                            <div className='cart' key={data?.id} >
                                <h3 >{data?.item.name}</h3>
                                <span className="dot"></span>
                                <h3>{data?.item.price + " SEK"}</h3>
                                <button onClick={RemoveFromCart(item.id)}>Remove</button>
                                <p className='quantity'>{item.quantity + " Styck"} </p>

                            </div >
                        )
                    )
            )
        }
        else if (cart.cartItems.length < 1) {
            return (
                <h1>Nothing ordered</h1>
            )
        }
    });

    function RemoveFromCart(id) {
        dispatch(removeFromCart({ id: id, quantity: 1 }));
    }

    async function Order() {

        var orderArray = [];
        cart.cartItems.map((item) => {
            var i = 0;
            while (item.quantity > i) {
                orderArray.push(item.id);
                i++;
            }
        });
        const data = await createOrder({ items: orderArray }).unwrap();

        if (error === undefined) {
            dispatch(setCartOrderId(data?.order?.id));
            navigate("/Eta");
        }
        else {
            errorMessageForOrder = error;
        }

    }

    return (
        <div>
            <Header hideCart="true"></Header>
            <div className='wrapCart winter-solstice-container'>
                <div>
                    {cartComponents}
                </div>
                <div>{errorMessageForOrder}</div>
                <footer>
                    <div><h2>TOTALT</h2>
                        <h2>{" " + totalPrice === NaN ? "" : totalPrice + " SEK"}</h2>
                    </div>
                    <button className="takeMyMoney" onClick={Order}>TAKE MY MONEY!</button>
                </footer>
            </div>
        </div>
    );
}
export default Cart;