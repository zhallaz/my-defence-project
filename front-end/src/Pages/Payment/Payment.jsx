import React, { useState, useContext } from "react";
import "./Payment.css";
import { StoreContext } from "../../Context/StoreContext"; // Adjust path if needed

const Payment = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const totalAmount = subtotal + deliveryFee;

  const handlePay = (e) => {
    e.preventDefault();
    if (paymentMethod === "card") {
      alert("Processing Card Payment...");
    } else {
      alert("Transfer Submitted! Please await confirmation.");
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2>Secure Payment Gateway</h2>
        <p className="payment-subtitle">Choose your preferred method to complete your order</p>

        {/* PAYMENT TOGGLE */}
        <div className="payment-toggle">
          <div
            className={`toggle-option ${paymentMethod === "card" ? "active" : ""}`}
            onClick={() => setPaymentMethod("card")}
          >
            💳 Pay with Card
          </div>
          <div
            className={`toggle-option ${paymentMethod === "transfer" ? "active" : ""}`}
            onClick={() => setPaymentMethod("transfer")}
          >
            🏦 Bank Transfer
          </div>
        </div>

        {/* DYNAMIC FORM */}
        <form onSubmit={handlePay}>
          <div className="payment-form-container">
            {paymentMethod === "card" ? (
              <div className="card-form-inputs">
                <input required type="text" placeholder="Cardholder Name" />
                <input required type="text" maxLength="19" placeholder="Card Number" />
                <div className="multi-fields">
                  <input
                    required
                    type="text"
                    maxLength="5"
                    placeholder="MM/YY"
                    style={{ width: "48%" }}
                  />
                  <input
                    required
                    type="password"
                    maxLength="3"
                    placeholder="CVV"
                    style={{ width: "48%" }}
                  />
                </div>
              </div>
            ) : (
              <div className="transfer-details-box">
                <p className="transfer-instruction">
                  Transfer the exact grand total to the account below:
                </p>
                <div className="bank-details">
                  <p>
                    <strong>Bank Name:</strong> Opay
                  </p>
                  <p>
                    <strong>Account Number:</strong> 9066951245
                  </p>
                  <p>
                    <strong>Account Name:</strong> Ezeji Chinemerem Raymond
                  </p>
                </div>
                <input required type="text" placeholder="Your Sender Bank & Account Name" />
                <p className="note">Please make the transfer before clicking confirm.</p>
              </div>
            )}
          </div>

          <div className="amount-to-pay">
            <h3>
              Total Amount: <span>${totalAmount}</span>
            </h3>
          </div>

          <button type="submit" className="pay-btn">
            {paymentMethod === "card" ? "PAY NOW" : "CONFIRM TRANSFER"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
