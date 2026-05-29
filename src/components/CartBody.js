import { LuMinus, LuPlus, LuShoppingBag, LuTrash } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

function CartBody() {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeItem = useCartStore((state) => state.removeItem);

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <section className="middle-cart">
      {cart.length === 0 ? (
        <div className="empty-cart container">
          <LuShoppingBag className="bag-icon" />
          <p>Your cart is empty</p>
          <NavLink to="/catalog" className="cont-shop">
            <button className="no-items">CONTINUE SHOPPING</button>
          </NavLink>
        </div>
      ) : (
        <div className="main-cart container">
          <div className="orders">
            <div className="top-order">
              <p>{cart.length} ITEM(S)</p>
              <button className="all-out" onClick={() => clearCart()}>
                <LuTrash /> REMOVE ALL
              </button>
            </div>
            {cart.map((cat) => (
              <div className="one-sec" key={cat.id}>
                <div className="left-cart">
                  <img src={cat.image} className="cart-image" alt="pants"></img>
                  <div className="order-dets">
                    <p className="cart-categ">{cat.category.toUpperCase()}</p>
                    <h5 className="cart-name">{cat.title}</h5>
                    <p className="cat-price">${cat.price} each</p>
                    <div className="button-area">
                      <div className="cart-quantity">
                        <button
                          onClick={() =>
                            updateQuantity(cat.id, cat.quantity - 1)
                          }>
                          <LuMinus />
                        </button>
                        <input type="text" value={cat.quantity} readOnly />
                        <button
                          onClick={() =>
                            updateQuantity(cat.id, cat.quantity + 1)
                          }>
                          <LuPlus />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(cat.id)}
                        className="cart-remove">
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="right-cart">
                  <h3>${(cat.price * cat.quantity).toFixed(2)}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-checkout">
            <h5 className="order-sum">Order Summary</h5>
            <div className="check-row1">
              <p>Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="check-row2">
              <p>Shipping:</p>
              <p>Calculated at checkout</p>
            </div>
            <div className="check-row1">
              <p className="bold">Estimated Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="check-cart-end">
              <NavLink to="/checkout">
                <button className="primary-btn">PROCEED TO CHECKOUT</button>
              </NavLink>
              <NavLink to="/catalog" className="back-from">
                CONTINUE SHOPPING
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartBody;
