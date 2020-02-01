import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ROUTES } from "../../constants";

export const PaymentMethods = () => {
  return (
    <div className="paymentmethods">
      <div className="header-tools">
        <h3>Payment Methods</h3>
        <p>
          <Link to={ROUTES.NEW_PAYMENT_METHOD}>
            <button className="btn btn-small">
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />{" "}
              New Payment Method
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};
