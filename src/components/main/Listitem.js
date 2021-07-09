import React from 'react';

function ListItem({toggleTodo, item, deleteItem}) {

    function handleToggle() {
        toggleTodo(item.id)
    }

    function handleDelete(){
        deleteItem(item.id)
    }

    return (
            <li draggable={"true"} key={item.id}>
                <label className="container">
                    <input onChange={handleToggle} checked={item.checked === true} type={"checkbox"}/> {item.name}
                    <span className="checkmark"></span>
                </label>
                <label onClick={handleDelete} className="close">
                    <i className="close-icon fas fa-times"></i>
                </label>
                <div className={"date"}>{item.date}</div>
            </li>
    );
}

export default ListItem;