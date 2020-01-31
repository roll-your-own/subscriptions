import React, { useState } from "react";
import { useAuthUserContext } from "../Session";
import { injectStripe, CardElement } from "react-stripe-elements";

const CheckoutForm = ({ elements, stripe }) => {
  const { dbUser } = useAuthUserContext();
  const [cardName, setCardName] = useState(dbUser.displayName);

  const onSubmit = e => {
    e.preventDefault();
    const cardElement = elements.getElement("card");
    stripe
      .createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: { name: cardName, email: dbUser.email }
      })
      .then(({ paymentMethod }) => {
        console.log("Received Stripe PaymentMethod:", paymentMethod);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="cardName">Name On Card</label>
        <input
          type="text"
          name="cardName"
          id="cardName"
          placeholder={"Name on Card"}
          value={cardName}
          onChange={e => setCardName(e.currentTarget.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="cardnumber">Card Details</label>
        <div className="input-elements">
          <CardElement
            style={{
              base: {
                iconColor: "#444",
                color: "#444",
                fontWeight: 400,
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                "::placeholder": {
                  color: "#ccc"
                }
              },
              invalid: {
                iconColor: "#d86a6a",
                color: "#d86a6a"
              }
            }}
          />
        </div>
      </div>
      <div className="field">
        <button type="submit" className="btn">
          Add Payment Method
        </button>
      </div>
    </form>
  );
};

export default injectStripe(CheckoutForm);
