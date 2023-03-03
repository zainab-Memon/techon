import React from "react";
import "./recent.css";
import { BiTransfer } from "react-icons/bi";
import Profile from "../../assets/profile.png";
const Recent = () => {
  return (
    <div className="recent">
      <h3>Recent Payments </h3>
      <div className="items">
        <div className="item-payment">
          <div>
            <img className="p-img" src={Profile} alt="payment" />
          </div>
          <div className="item-right">
            <h4>Verizon account top up</h4>
            <span>-$4.20</span>
          </div>
        </div>
        <div className="item-payment">
          <div>
            <img className="p-img" src={Profile} alt="payment" />
          </div>
          <div className="item-right">
            <h4>Verizon account top up</h4>
            <span>-$4.20</span>
          </div>
        </div>
        <div className="item-payment">
          <div>
            <img className="p-img" src={Profile} alt="payment" />
          </div>
          <div className="item-right">
            <h4>Verizon account top up</h4>
            <span>-$4.20</span>
          </div>
        </div>
        <div className="item-payment">
          <div>
            <img className="p-img" src={Profile} alt="payment" />
          </div>
          <div className="item-right">
            <h4>Verizon account top up</h4>
            <span>-$4.20</span>
          </div>
        </div>
        <div className="item-payment">
          <div>
            <img className="p-img" src={Profile} alt="payment" />
          </div>
          <div className="item-right">
            <h4>Verizon account top up</h4>
            <span>-$4.20</span>
          </div>
        </div>
        <div className="item-payment">
          <div>
            <img className="p-img" src={Profile} alt="payment" />
          </div>
          <div className="item-right">
            <h4>Verizon account top up</h4>
            <span>-$4.20</span>
          </div>
        </div>
        <div className="item-payment">
          <div>
            <img className="p-img" src={Profile} alt="payment" />
          </div>
          <div className="item-right">
            <h4>Verizon account top up</h4>
            <span>-$4.20</span>
          </div>
        </div>
      </div>
      <h4>... See all transaction</h4>
    </div>
  );
};

export default Recent;
