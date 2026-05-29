import { Link } from "react-router-dom";
import { LuPackage } from "react-icons/lu";
import { useOrderStore } from "../stores/orderStore";
import "../css/Orders.css";

function Orders() {
  const orders = useOrderStore((state) => state.orders);

  return (
    <main className="orders-page">
      <section className="secondary-banner">
        <div className="container banner-container">
          <h2>Orders</h2>
          <p>Track your recent purchases</p>
        </div>
      </section>

      <section className="orders-body container">
        {orders.length === 0 ? (
          <div className="empty-orders">
            <LuPackage className="orders-icon" />
            <h3>No orders yet</h3>
            <p>Once you complete a checkout, your orders will appear here.</p>

            <Link to="/catalog" className="primary-btn">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="orders-wrapper">
            <div className="orders-header">
              <div>
                <p className="orders-subtitle">Purchase History</p>
                <h3>Your Orders</h3>
              </div>

              <span>{orders.length} Orders</span>
            </div>

            <div className="orders-list">
              {orders.map((order) => (
                <article className="order-card" key={order.id}>
                  <div className="order-top">
                    <div>
                      <p className="order-label">Order ID</p>
                      <h4>#{order.id}</h4>
                    </div>

                    <div>
                      <p className="order-label">Date</p>
                      <h4>{order.date}</h4>
                    </div>

                    <div>
                      <p className="order-label">Status</p>
                      <span className="status delivered">Delivered</span>
                    </div>

                    <div>
                      <p className="order-label">Total</p>
                      <h4>${order.total.toFixed(2)}</h4>
                    </div>
                  </div>

                  <div className="order-products">
                    {order.items.map((item) => (
                      <div className="ordered-item" key={item.id}>
                        <img src={item.image} alt={item.title} />

                        <div className="ordered-details">
                          <p className="ordered-category">{item.category}</p>

                          <h5>{item.title}</h5>

                          <p>
                            Qty: {item.quantity} × ${item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Orders;
