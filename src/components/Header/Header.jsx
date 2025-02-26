import './Header.css'
import CartIcon from '../CartIcon/CartIcon';
function Header(props) {

    function NavigateToMenu() {
        navigate("/");
    }

    return (
        <div className='header'>
            <div className='wrap-winter-solstice-icon'>
                <img className="winter-solstice-icon" src="/Winter_Solstice.png" onClick={NavigateToMenu} />
            </div>
            <h1 className='logo-name'>Restaurant Winter Sunstice</h1>
            {props.hideCart === "true" ? (<div></div>) : (<CartIcon className="cart-icon"></CartIcon>)}
        </div>
    )
}
export default Header;