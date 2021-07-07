import React, {useRef, useState, useEffect} from 'react';
import TodoList from "./main/TodoList";
import { v4 as uuidv4 } from 'uuid';

const localStorageKey="";

function Main() {
    // -> object destructuring:
    // useState Hook:  first input is an array of all the elements, the second input is a function to set a new 'state' for the first input , the last input is the default state
    const [todos, setTodos] = useState([{id:1, name:"Make The Dopest Album", checked:false},{id:2, name:"Learn kung fu", checked:false},{id:3, name:"Start to code", checked:true}])

    // the useRef is a hook function to get a value from an input field.
    const inputItem = useRef();


    //this hook is used to load the localstorage saved earlier and convert it back from a string to an object in an array
    useEffect(()=> {
        const storeditems = JSON.parse(localStorage.getItem(localStorageKey))
        if (storeditems) setTodos(storeditems)
    }, [])

    //this hook is used to store information to the localStorage. it is called everytime something changes in the dependency, in this case our todo array.
    //save is by using .setitem and give a value what it must save. in this case it is array, but it can store only strings, so we need to parse with the stringify function.
    //it also needs a variable to store the information inside, hence the first parameter 'localStorageKey'
    useEffect(()=>{
        localStorage.setItem(localStorageKey,JSON.stringify(todos) )
    }, [todos]) // <- this here.


    function toggleTodo(id) {
        const todoList = [...todos]
        const todo = todoList.find(todo => todo.id === id)
        todo.checked = !todo.checked
        setTodos(todoList)
    }

    function addTodo(){
        const name = inputItem.current.value
        if (name === '') return
        setTodos(todos => {
            return [...todos, {id:uuidv4(), name:name, checked:false}]
        })
        inputItem.current.value = null
    }

    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="new-item col-12 text-center p-3">
                    <h1>Recollect</h1>
                    <form>
                        <input className={"shadow-sm"} placeholder={"Add new Todo"} ref={inputItem} id="add-todo"/>
                        <button onClick={addTodo} id="add-submit" type="button" className={"mx-3 btn shadow-sm"}>Add</button>
                    </form>
                </div>
                <TodoList toggleTodo={toggleTodo} title={"To Do"} todos={todos.filter(todos => !todos.checked)}/>
                <TodoList toggleTodo={toggleTodo} title={"Completed"} todos={todos.filter(todos => todos.checked)}/>
            </div>
        </div>
    );
}

export default Main;