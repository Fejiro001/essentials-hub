function OrderSummary(props) {
  const { cart, subtotal, vat, total } = props;

  return (
    <aside>
      <h2>Order Summary</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}

      <div className="subtotal">
        <p>Subtotal</p>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="shipping">
        <p>Shipping</p>
        <span>{subtotal > 100 ? "Free" : "$15.00"}</span>
      </div>

      <div className="vat">
        <p>VAT (12%)</p>
        <span>${vat.toFixed(2)}</span>
      </div>

      <div className="total">
        <h3>Grand Total</h3>
        <h3>${total.toFixed(2)}</h3>
      </div>

      <button className="primary-btn" type="submit" form="checkout-form">
        PAY ${total.toFixed(2)}
      </button>
    </aside>
  );
}

export default OrderSummary;
