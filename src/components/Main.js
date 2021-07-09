import React, {useRef, useState, useEffect} from 'react';
import TodoList from "./main/TodoList";
import AddTodo from "./main/AddTodo";
import { v4 as uuidv4 } from 'uuid';

const localStorageKey="";
const date = new Date();
const [month, day, year, hour, minutes] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes()];


function Main() {
    // -> object destructuring:
    // useState Hook:  first input is an array of all the elements, the second input is a function to set a new 'state' for the first input , the last input is the default state
    const [todos, setTodos] = useState([{id:1, name:"Seal magna carta", checked:false, date:"1215-6-15 04:20"},{id:2, name:"fix life problems", checked:false, date:"1963-8-22 12:30"},{id:3, name:"Start to code", checked:true, date:"2021-4-6 09:00"}])

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

    function deleteItem(id) {
        const deleteItem = [...todos]
        const todo = deleteItem.findIndex(todo => todo.id === id)
        deleteItem.splice(todo, 1)
        setTodos(deleteItem)
    }

    function clearList(title) {
        const clearList = [...todos]
        let todo = clearList.filter(elem => elem.checked === true)
        if (title === "Completed") {
            let filtered = clearList.filter(elem => !todo.includes(elem))
            setTodos(filtered)
        } else {
            let filtered = clearList.filter(elem => todo.includes(elem))
            setTodos(filtered)
        }
    }


    function addTodo(){
        let itemDate = year +"-"+ month+"-"+day+" "+hour+":"+minutes
        const name = inputItem.current.value
        if (name === '') return
        setTodos(todos => {
            return [...todos, {id:uuidv4(), name:name, checked:false, date:itemDate}]
        })
        inputItem.current.value = null
    }

    return (
        <div className="container-fluid ">
            <div className="row">
                <AddTodo addTodo={addTodo} inputItem={inputItem}  />
                <TodoList clearList={clearList} deleteItem={deleteItem} toggleTodo={toggleTodo} title={"To Do"} todos={todos.filter(todos => !todos.checked)}/>
                <TodoList clearList={clearList} deleteItem={deleteItem} toggleTodo={toggleTodo} title={"Completed"} todos={todos.filter(todos => todos.checked)}/>
            </div>
        </div>
    );
}

export default Main;