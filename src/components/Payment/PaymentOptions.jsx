import React from "react";
import "./payment.css";
import { BiTransfer } from "react-icons/bi";

const PaymentOptions = () => {
  return (
    <div className="payment">
      <h3>Payment Options</h3>
      <div className="options">
        <div className="option">
          <BiTransfer className="option-icon" />
          <div className="option-right">
            <h5>Transfer to someone</h5>
            <p>156 Contacts</p>
          </div>
        </div>
        <div className="option">
          <BiTransfer className="option-icon" />
          <div className="option-right">
            <h5>Transfer to someone</h5>
            <p>156 Contacts</p>
          </div>
        </div>
      </div>

      <h3>Service Providers</h3>
      <div className="options">
        <div className="option">
          <div className="option-right">
            <h5>Transfer to someone</h5>
            <p>156 Contacts</p>
          </div>
          <BiTransfer className="option-icon" />
        </div>

        <div className="option">
          <div className="option-right">
            <h5>Transfer to someone</h5>
            <p>156 Contacts</p>
          </div>
          <BiTransfer className="option-icon" />
        </div>

        <div className="option">
          <div className="option-right">
            <h5>Transfer to someone</h5>
            <p>156 Contacts</p>
          </div>
          <BiTransfer className="option-icon" />
        </div>
        <div className="option">
          <div className="option-right">
            <h5>Transfer to someone</h5>
            <p>156 Contacts</p>
          </div>
          <BiTransfer className="option-icon" />
        </div>
        <div className="option">
          <div className="option-right">
            <h5>Transfer to someone</h5>
            <p>156 Contacts</p>
          </div>
          <BiTransfer className="option-icon" />
        </div>
        <div className="option">
          <div className="option-right">
            <h5>Transfer to someone</h5>
            <p>156 Contacts</p>
          </div>
          <BiTransfer className="option-icon" />
        </div>
        <div className="option">
          <div className="option-right">
            <h5>Transfer to someone</h5>
            <p>156 Contacts</p>
          </div>
          <BiTransfer className="option-icon" />
        </div>
      </div>
      <h4>... See all providers</h4>
    </div>
  );
};

export default PaymentOptions;
