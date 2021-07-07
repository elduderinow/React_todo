import React, {useRef, useState, useEffect} from 'react';
import TodoList from "./main/TodoList";

const LOCAL_STORAGE_KEY = 'todo.key'

function Main() {

    const [todos, setTodos] = useState([])
    const inputItem = useRef();


    useEffect(()=>{
        const storeditems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storeditems) setTodos(storeditems)
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos) )
    }, [todos])

    function addTodo(){
        const name = inputItem.current.value
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, name]
        })
        inputItem.current.value = null
    }

    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 text-center p-3 bg-primary ">
                    <form>
                        <input ref={inputItem} id="add-todo"/>
                        <button onClick={addTodo} id="add-submit" type="button" className={"mx-3 btn btn-success"}>Add to Do</button>
                    </form>
                </div>
                <TodoList title={"To Do"} todos={todos}/>
                <TodoList checked={"checked"} title={"Complete"} todos={todos}/>
                <p>{todos.length} tasks left to do</p>

            </div>
        </div>
    );
}

export default Main;