import React from "react";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import "./nav.css";
import Profile from "../../assets/profile.png";
const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="first-row">
          <div className="left">
            <h3>Payment</h3>
          </div>

          <div className="right">
            <div className="searchbar">
              <AiOutlineSearch />
              <input
                type="text"
                placeholder="Type to search..."
                className="input"
              />
            </div>

            <div className="noti--icon">
              <AiOutlineBell />
            </div>
            <div>
              <img className="profile-img" src={Profile} alt="" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="buttons">
            <button className="btn-primary btn-active">Make a payment</button>
            <button className="btn-primary">Private Transfer</button>
            <button className="btn-primary"> Exchange</button>
          </div>
          <div className="new-temp">
            <div>
              <BiAddToQueue className="temp-icon" />
            </div>
            <h4>Add new template</h4>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
