import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import test from '../media/test-image.png'

function CartBody (props) {

    return (
        <section className="middle-cart">
            {props.cart.length === 0? 
                <div className="empty-cart container">
                    <FiShoppingBag className="bag-icon"/>
                    <p>Your cart is empty</p>
                    <NavLink to='/Catalog' className='cont-shop'><button className="no-items">CONTINUE SHOPPING</button></NavLink>
                </div>
                : 
                <div className="main-cart container">
                    <div className="orders">
                        <div className="one-sec">
                            <div className="left-cart">
                                <img src={test} className="cart-image" alt="pants"></img>
                                <div className="order-dets">
                                    <p className="cart-categ">Men's Clothing</p>
                                    <h5 className="cart-name">Jeans for testing of layout</h5>
                                    <p>45.00 each</p>
                                    <div className="button-area">
                                        <div className="cart-quantity">
                                            <button>- </button>
                                            <p>2</p>
                                            <button> +</button>
                                        </div>
                                        <p>REMOVE</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-cart">
                              <h3>$75.45</h3>  
                            </div>
                        </div>
                    </div>
                    <div className="cart-checkout">
                        <h5 className="order-sum">Order Summary</h5>
                        <div className="check-row1">
                            <p>Subtotal:</p>
                            <p>$123.64</p>
                        </div>
                        <div className="check-row2">
                            <p>Shipping:</p>
                            <p>Calculated at checkout</p>
                        </div> 
                        <div className="check-row1">
                            <p className="bold">Estimated Total:</p>
                            <p>$224.61</p>
                        </div>    
                        <div className="check-cart-end">
                            <NavLink to='/Checkout'><button className="conclude">PROCEED TO CHECKOUT</button></NavLink>      
                            <NavLink to='/Catalog' className='back-from'>CONTINUE SHOPPING</NavLink>
                        </div>
                    </div>
                </div>
            }  
        </section>
    );
}

export default CartBody;