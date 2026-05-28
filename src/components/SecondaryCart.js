function SecondaryCart (props) {
    return (
        <section className="cart-banner">
            <div className="container">           
                <h2>Your Cart</h2>
                <p>{props.cart.length} items in your cart</p>
            </div>
        </section>
    );
}

export default SecondaryCart;