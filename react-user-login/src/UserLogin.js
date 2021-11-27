import React from "react";

/**
 * 
 * @param {headerText, onClick, loginButtonText} props
 * @returns User Login Component
 */
export default function UserLogin(props) {
    return(
        // User Login Box Container 
        <div className="user-login-box">
            <h1>{props.headerText}</h1>
            <input id="username" className="user-login-input" placeholder="Username"></input>
            <input type="password" id="password" className="user-login-input" placeholder="Password"></input>
            <button className="user-login-button"
                    onClick={props.onClick}>
                {props.loginButtonText}
            </button> 
        </div>
    );
}