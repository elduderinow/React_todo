import React from "react"
import ListItem from './Listitem'

function TodoList(props) {
    return (
        <div className="todolist col-md-6">
            <h5>{props.title}</h5>
            <ul>
                <ListItem checked={props.checked} item={props.todos}/>
            </ul>
        </div>
    )
}

export default TodoList