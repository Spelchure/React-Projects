import React from "react";
import ListAltIcon from '@mui/icons-material/ListAlt';

/**
 * 
 * @param {addNewTodo} props 
 * @returns Header Component 
 */
export default function Header(props) {
    
    const addButtonClick = () => {
        const element = document.getElementById('new-todo-input');
        if(element) {
            if(element.value.length > 0) {
                props.addNewTodo(element.value);
            } else {
                element.style.borderBottom = "1px solid red";
            }
        }
    } 

    return(
        <header>
            <ListAltIcon style={{
                color: "white",
                marginLeft: "10%"
            }} />             
            <span>React TODO List</span>
            <div className="header-right-panel">
                <input id="new-todo-input" 
                    className="add-new-todo" /> 
                <span onClick={addButtonClick}>EKLE</span> 
            </div> 
        </header>
    );
}