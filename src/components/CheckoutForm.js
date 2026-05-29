import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

function CheckoutForm(props) {
  const { register, handleSubmit, errors, onSubmit } = props;
  
  return (
    <div className="theform">
      <Link className="back-to-cart" to="/cart">
        <LuArrowLeft />
        Back To Cart
      </Link>

      <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Billing Details</h2>

        <div className="names">
          <div className="group">
            <label>FIRST NAME</label>
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
            />
            {errors.firstName && (
              <span className="error">{errors.firstName.message}</span>
            )}
          </div>

          <div className="group">
            <label>LAST NAME</label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <span className="error">{errors.lastName.message}</span>
            )}
          </div>
        </div>

        <div className="group">
          <label>EMAIL</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
            })}
            placeholder="Email"
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <div className="group">
          <label>PHONE</label>
          <input
            {...register("phone", {
              required: "Phone is required",
              minLength: { value: 10, message: "Too short" }
            })}
            placeholder="Phone"
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>

        <h2>Shipping Information</h2>

        <div className="group">
          <label>ADDRESS</label>
          <input
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <span className="error">{errors.address.message}</span>
          )}
        </div>

        <div className="group">
          <label>CITY</label>
          <input {...register("city", { required: "City is required" })} />
          {errors.city && <span className="error">{errors.city.message}</span>}
        </div>

        <div className="group">
          <label>POSTAL CODE</label>
          <input
            {...register("postalCode", { required: "Postal code is required" })}
          />
          {errors.postalCode && (
            <span className="error">{errors.postalCode.message}</span>
          )}
        </div>

        <div className="group">
          <label>COUNTRY</label>
          <input
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <span className="error">{errors.country.message}</span>
          )}
        </div>

        <h2>Payment Details</h2>

        <div className="group">
          <label>CARDHOLDER NAME</label>
          <input {...register("cardName", { required: "Required" })} />
          {errors.cardName && (
            <span className="error">{errors.cardName.message}</span>
          )}
        </div>

        <div className="group">
          <label>CARD NUMBER</label>
          <input
            {...register("cardNumber", {
              required: "Required",
              minLength: { value: 16, message: "16 digits required" }
            })}
          />
          {errors.cardNumber && (
            <span className="error">{errors.cardNumber.message}</span>
          )}
        </div>

        <div className="group-row">
          <div className="group">
            <label>EXPIRY</label>
            <input {...register("expiry", { required: "Required" })} />
            {errors.expiry && (
              <span className="error">{errors.expiry.message}</span>
            )}
          </div>

          <div className="group">
            <label>CVC</label>
            <input
              {...register("cvc", {
                required: "Required",
                minLength: { value: 3, message: "3 digits" }
              })}
            />
            {errors.cvc && <span className="error">{errors.cvc.message}</span>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
