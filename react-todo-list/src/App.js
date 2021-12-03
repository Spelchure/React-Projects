import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import { useState } from "react";

import "./App.css";

/**
 * 
 * @returns App Component
 */
export default function App() {
    const [todoList, setTodoList] = useState([
        {key: 0, date: new Date(), value: "Example 1"},
        {key: 1, date: new Date(), value: "Example 2"},
    ]);

    // Adds new todo and changes state
    const addNewTodo = (value) => {
        const todoListCp = [...todoList];
   
        todoListCp.push({
            key: todoList.length + 1,
            date: new Date(),
            value: value,
        });
        
        setTodoList(todoListCp);
    }

    // Deletes todo with specific key
    const deleteTodo = (key) => {
        const todoListFiltered = todoList.filter(element => element.key !== key);
        setTodoList(todoListFiltered);
    }

    return(
        <> 
        <Header addNewTodo={addNewTodo}/>
        <TodoList entries={todoList} onDeleteClick={deleteTodo}/>
        </>
    );
}