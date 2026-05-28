import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import '../css/checkout.css';

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
            <section className="checkout-body">
                <div className="theform">
                    <Link to="/cart">
                        <LuArrowLeft/>
                        Back To Cart
                    </Link>
                    <form>
                        <h2>Billing details</h2>
                        <div className="names">
                           <div className="group">
                                <label>FIRST NAME</label>
                                <input type="text" placeholder="First Name"/>
                           </div>
                            <div className="group">
                                <label>LAST NAME</label>
                                <input type="text" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="group">
                            <label>EMAIL</label>
                            <input type="text" placeholder="Email"/>
                        </div>
                         <div className="group">
                            <label>PHONE</label>
                            <input type="text" placeholder="Phone"/>
                        </div>
                        <h2>Shipping Information</h2>
                         <div className="group">
                            <label>ADDRESS</label>
                            <input type="text" placeholder="Address"/>
                        </div>
                        <div className="group">
                            <label>CITY</label>
                            <input type="text" placeholder="City"/>
                        </div>
                        <div className="group">
                            <label>POSTAL CODE</label>
                            <input type="text" placeholder="Postal Code"/>
                        </div>
                         <div className="group">
                            <label>COUNTRY</label>
                            <input type="text" placeholder="Country"/>
                        </div>
                        <h2>Payment details</h2>
                         <div className="group">
                            <label>CARDHOLDER NAME</label>
                            <input type="text" placeholder="Cardholder Name"/>
                        </div>
                        <div className="group">
                            <label>CARD NUMBER</label>
                            <input type="text" placeholder="Card Number"/>
                        </div>
                         <div className="group">
                            <label>EXPIRY</label>
                            <input type="text" placeholder="MM / YY"/>
                        </div>
                         <div className="group">
                            <label>CVC</label>
                            <input type="text" placeholder="CVC"/>
                        </div>
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