import React from "react"
import ListItem from './Listitem'

function TodoList(props) {
    console.log(props.toggleTodo)
    return (
        <div className="todolist col-md-6">
            <h5>{props.title}<span> {props.todos.filter(todos => (props.title === "To Do") ? !todos.checked : todos.checked).length}</span></h5>
            <ul>
                <ListItem toggleTodo={props.toggleTodo} item={props.todos}/>
            </ul>
        </div>
    )
}

export default TodoList