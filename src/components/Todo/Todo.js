import React, { useEffect, useState } from 'react';
import List from '../List/List';
import './Todo.css'

const Todo = () => {
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setTodos(data))
    },[])
    return (
        <div >
            <h2>Todo list</h2>
            <div className='list'>
                {
                    todos.map(todo=><List todo={todo}></List>)
                }
            </div>
        </div>
    );
};

export default Todo;