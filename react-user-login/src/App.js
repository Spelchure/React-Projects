import React from "react";
import UserLogin from "./UserLogin";

/**
 * 
 * @returns Main Component 
 */
export default function App() {
    // On click login button show alert
    const loginButtonClick = (username,password) => {
        var userName = document.getElementById("username").value; // Username input value
        var passWord = document.getElementById("password").value; // Password input value
        alert("You logged with USERNAME:" + userName + "   PASSWORD:" + passWord); // Alert
    } 
    
    // React Bileşeni
    function UsernameHeader(props) {
	    return <h1>{props.text}</h1>
    }
    const element =  <UsernameHeader text="ReactUser" />;
    ReactDOM.render(element, document.getElementById('root'));


    // Return Main Component APP
    return (
        <UserLogin headerText="Sign IN" loginButtonText="LOGIN" onClick={loginButtonClick}/>
    )
}