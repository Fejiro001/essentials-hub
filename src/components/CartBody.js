import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";


function CartBody () {
    const cart = useCartStore(state => state.cart);
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const clearCart = useCartStore(state => state.clearCart);
    const removeItem = useCartStore(state => state.removeItem);
    
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = cart.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
        setTotal(getTotal)    
    }, [cart])

    

    return (
        
        <section className="middle-cart">
            {cart.length === 0? 
                <div className="empty-cart container">
                    <FiShoppingBag className="bag-icon"/>
                    <p>Your cart is empty</p>
                    <NavLink to='/Catalog' className='cont-shop'><button className="no-items">CONTINUE SHOPPING</button></NavLink>
                </div>
                : 
                <div className="main-cart container">
                    <div className="orders">
                        <div className="top-order">
                            <p>{cart.length} items</p>
                            <button className="all-out" onClick={() => clearCart()}><FaRegTrashAlt /> REMOVE ALL</button>
                        </div>
                        {cart.map(cat => {
                            return(
                                <div className="one-sec">
                                    <div className="left-cart">
                                        <img src={cat.image} className="cart-image" alt="pants"></img>
                                        <div className="order-dets">
                                            <p className="cart-categ">{(cat.category).toUpperCase()}</p>
                                            <h5 className="cart-name">{cat.title}</h5>
                                            <p className="cat-price">${cat.price} each</p>
                                            <div className="button-area">
                                                <div className="cart-quantity">
                                                    <button onClick={() =>
                                                        updateQuantity(cat.id, cat.quantity - 1)
                                                        }>
                                                            - 
                                                        </button>
                                                    <p>{cat.quantity}</p>
                                                    <button onClick={() =>
                                                        updateQuantity(cat.id, cat.quantity + 1)}> 
                                                        + 
                                                    </button>
                                                </div>
                                                <p onClick={() => removeItem(cat.id)} className="cart-remove">REMOVE</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-cart">
                                    <h3>${(cat.price * cat.quantity).toFixed(2)}</h3>  
                                    </div>
                                </div>        
                            )
                        })}
                        {/* <div className="one-sec">
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
                        </div> */}
                    </div>
                    <div className="cart-checkout">
                        <h5 className="order-sum">Order Summary</h5>
                        <div className="check-row1">
                            <p>Subtotal:</p>
                            <p>${(total).toFixed(2)}</p>
                        </div>
                        <div className="check-row2">
                            <p>Shipping:</p>
                            <p>Calculated at checkout</p>
                        </div> 
                        <div className="check-row1">
                            <p className="bold">Estimated Total:</p>
                            <p>${(total + 50).toFixed(2)}</p>
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