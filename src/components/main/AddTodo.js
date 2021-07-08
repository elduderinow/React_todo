import React from "react";

function AddTodo({inputItem, addTodo}) {
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            addTodo()
        }
    }
    return (
        <div className="new-item col-12 text-center">
            <h1>Recollect</h1>
            <form>
                <input className={"shadow-sm"} placeholder={"Add new Todo"} onKeyDown={handleKeyDown} ref={inputItem} id="add-todo"/>
                <button onClick={addTodo} id="add-submit" type="button" className={" btn shadow-sm"}>Add</button>
            </form>
        </div>
    )
}

export default AddTodo;