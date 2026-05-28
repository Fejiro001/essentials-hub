import { FiShoppingBag } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

function CartBody () {
    return (
        <div className="main-cart">
            <FiShoppingBag className="bag-icon"/>
            <p>Your cart is empty</p>
            <NavLink to='/Catalog' className='cont-shop'><button className="no-items">CONTINUE SHOPPING</button></NavLink>
        </div>
    );
}

export default CartBody;