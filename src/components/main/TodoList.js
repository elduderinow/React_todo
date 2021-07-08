import React from "react"
import ListItem from './Listitem'

function TodoList({todos, title, toggleTodo, deleteItem, clearList}) {
    function handleClearList() {
        clearList(title)
    }

    return (
        <div className="todolist col-md-6">
            <div className={"wrapper shadow"}>
            <h5>{title}<span className={"count"}> {todos.filter(todos => (title === "To Do") ? !todos.checked : todos.checked).length}</span> <span onClick={handleClearList} className={"clear"}>clear list</span></h5>
                <ul>
                    {todos.map(function (elem) {
                      return <ListItem key={elem.id} deleteItem={deleteItem} toggleTodo={toggleTodo} item={elem}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoList