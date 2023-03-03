import React from "react";
import "./sidebar.css";
import { RiPieChartFill } from "react-icons/ri";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FiCreditCard, FiSettings } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { ImArrowUpRight2 } from "react-icons/im";
import { TbFileInvoice } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import money from "../../assets/money .png";
import { IoMdAddCircleOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <p className="para">Navigation</p>
        <div className="item">
          <RiPieChartFill />
          <p>Dashboard</p>
        </div>
        <div className="item">
          <MdOutlineAccountBalanceWallet />
          <p>Accounts</p>
        </div>
        <div className="item">
          <FiCreditCard />
          <p>Card</p>
        </div>
        <div className="item">
          <GrTransaction />
          <p>Transaction</p>
        </div>
        <div className="item active-item">
          <ImArrowUpRight2 />
          <p>Payment</p>
        </div>
        <div className="item">
          <TbFileInvoice />
          <p>Invoicing</p>
        </div>
        <div className="item">
          <BsGraphUpArrow />
          <p>Trading</p>
        </div>
        <div className="item">
          <GoGraph />
          <p>Reports</p>
        </div>

        <div className="balance">
          <p className="para"> Balances</p>
          <div>
            <div className="item">
              <img src={money} alt="" />
              <p>100,050.75 USD</p>
            </div>
            <div className="item">
              <img src={money} alt="" />
              <p>100,050.75 USD</p>
            </div>
            <div className="item">
              <img src={money} alt="" />
              <p>100,050.75 USD</p>
            </div>
            <div className="item">
              <IoMdAddCircleOutline className="item" />
              <p>Open a balance</p>
            </div>
          </div>
        </div>
        <div className="item profile">
          <FiSettings />
          <p>Profile Settings</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
