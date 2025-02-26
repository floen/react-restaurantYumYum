import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useGetOrderByOrderIdQuery } from "../api/apiSlice";
import { emptyCart } from "../reducers/cartReducer";
import Header from "../components/Header/Header";
import './Eta.css'

function DirectionPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart =
        useSelector((state) => {
            return state.cart;
        });

    const { data, isError, isLoading } = useGetOrderByOrderIdQuery(cart.cartOrderId);
    console.log(data);
    const ETA = CountETA();
    function CountETA() {
        const etaTime = new Date(data?.order?.eta);
        const timeStamp = new Date(data?.order?.timestamp);
        var diff = (etaTime.getTime() - timeStamp.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff));
    }

    function NavigateToMenu() {
        navigate("/");
        dispatch(emptyCart());
    }
    function NavigateToReceipt() {
        navigate("/receipt")
    }

    return (
        <div className="wrap-eta">
            <Header hideCart="true"></Header>
            <div className="winter-solstice-container eta-section">
                <div className="wrap-text">
                    <h1>YOUR WONTONS IS COOKED</h1>
                    <h2>ETA {ETA} MIN</h2>
                    <img height={300} src="./wonton.png"></img>
                </div>
                <footer>
                    <button onClick={NavigateToMenu}>Gör en ny beställning</button>
                    <button onClick={NavigateToReceipt}>Kvitto</button>
                </footer>
            </div>
        </div>
    );
}
export default DirectionPage;