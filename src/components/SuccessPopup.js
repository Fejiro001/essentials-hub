import { LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

function SuccessPopup({ isSubmitted }) {
  if (!isSubmitted) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <LuCheck className="success-icon" />
        <h2>Thank You!</h2>
        <p>Your order has been placed. A confirmation is on its way to you inbox. We can't wait for you to unbox your essentials.</p>
        <Link to="/" className="primary-btn">
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default SuccessPopup;
