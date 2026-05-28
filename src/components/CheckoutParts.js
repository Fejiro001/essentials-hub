import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

const items = [
    {
        id: 1,
        title: "Rain Jacket",
        price: 79.98,
    },
    {
        id: 2,
        title: "Backpack",
        price: 109.95,
    },
];

function CheckoutParts () {
    return (
        <main className="checkout">
            <section className="checkout-header">
                <h2>CHECKOUT</h2>
            </section>
            <section>
                <div className="theform">
                    <Link to="/cart">
                    <LuArrowLeft/>
                    Back To Cart
                    </Link>
                    <form>
                        <h2>Billing details</h2>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Phone"/>
                        <h2>Shipping Information</h2>
                        <input type="text" placeholder="Address"/>
                        <input type="text" placeholder="City"/>
                        <input type="text" placeholder="Postal Code"/>
                        <input type="text" placeholder="Country"/>
                        <h2>Payment details</h2>
                        <input type="text" placeholder="Cardholder Name"/>
                        <input type="text" placeholder="Card Number"/>
                        <input type="text" placeholder="MM / YY"/>
                        <input type="text" placeholder="CVC"/>
                    </form>
                </div>
                <aside>
                    <h2>Order Summary</h2>
                    {items.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <span>${item.price}</span>
                        </div>
                    ))}
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <span>$189.93</span>
                    </div>
                    <div className="shipping">
                        <p>Shipping</p>
                        <span>Free</span>
                    </div>
                    <div className="vat">
                        <p>VAT (12%)</p>
                        <span>$22.79</span>
                    </div>
                    <div className="total">
                        <h3>Grand Total</h3>
                        <h3>$212.72</h3>
                    </div>
                    <button>PAY $212.72</button>
                </aside>
            </section>
        </main>
    );
}

export default CheckoutParts;