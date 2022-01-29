import React from "react";
import "./Account.css";
const Account = () => {
    return (
        <div className="accountpage">
            <div className="accountdetails">
                <div className="user">
                    <img
                        className="acc"
                        src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
                    />
                </div>
               
                <div className="transactionForm">
                    <div className="part">
                        <label>To</label>
                        <input type="text" />
                    </div>
                    <div className="part">
                        <label>Amount</label>
                        <input type="text" />
                    </div>
                    <div className="button">Send</div>
                </div>
            </div>
        </div>
    );
};
export default Account;