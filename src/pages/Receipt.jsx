import { useSelector, useDispatch } from 'react-redux';
import { useGetReceiptsByOrderIdQuery } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../reducers/cartReducer";
import './Receipt.css'
import Header from '../components/Header/Header';

function Receipt() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart =
        useSelector((state) => {
            return state.cart;
        });

    console.log(cart.cartOrderId);
    const { data, isError, isLoading } = useGetReceiptsByOrderIdQuery(cart.cartOrderId);
    console.log(data);
    console.log(data?.receipt.items);
    const receiptComponents = data?.receipt?.items.map((item) => {
        return (
            <div className='receipt' key={item.id}>
                <div>
                    <h3>{item.name}</h3>
                    <span className="dot"></span>
                    <h3>{item.price + " SEK"}</h3>
                    <div className='placeholder'></div>
                    <p>{item.quantity}</p>
                    <p>{item.type}</p>
                </div>



            </div>
        )
    });

    function NavigateToMenu() {
        navigate("/");
        dispatch(emptyCart());
    }

    return (
        <div className="wrap-receipt">
            <Header hideCart="true"></Header>
            <div className="winter-solstice-container receipt-section">
                <div>
                    <img className='icon' height={50} src="./Winter_Solstice.png"></img>
                    <h2 className='heading'>RECEIPT</h2>
                </div>
                {isLoading
                    ? (
                        <p className='message'>Loading receipt</p>
                    )
                    : (isError ?
                        (
                            <p className='message'>Something got wrong</p>
                        )
                        : (
                            <div>{receiptComponents}</div>
                        )
                    )

                }
                <button onClick={NavigateToMenu}>GÖR EN NY BESTÄLLNING</button>
            </div>
        </div>
    );
}
export default Receipt;