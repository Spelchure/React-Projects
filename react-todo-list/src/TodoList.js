import React from "react";
import './TodoList.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

/**
 * 
 * @param {entry, onDeleteClick} props 
 * @returns Todo List Item component
 */
export function TodoListItem(props) {
    
    return(
        <div className="todo-list-item">
            <span>{props.entry.date.toDateString()}</span>
            <span style={{
                marginTop: "13px",
            }}>{props.entry.value}</span> 

            <DeleteForeverIcon onClick={props.onDeleteClick} style={{
                marginLeft: "auto",
                marginRight: "8px",
                fontSize: "2em",
                cursor: "pointer",
            }} />
        </div>
    )
}

/**
 * 
 * @param {entries,onDeleteClick} props 
 * @returns TodoList component
 */
export default function TodoList(props) {
    return(
        <div className="todo-list-container">
            {props.entries.map((element) => {
                return(
                    <TodoListItem entry={element} 
                        onDeleteClick={() => props.onDeleteClick(element.key)}/>
                )
            })}
        </div>
    );
}