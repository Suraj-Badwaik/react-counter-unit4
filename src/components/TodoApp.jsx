import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import styles from './todo.module.css' ;

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos,newTodo]);
    }
  return (
    <div>
        <h1 className={styles.h1}>TodoApp</h1>
        <div className={styles.main}>
        <TodoList todos={todos}/>
        <TodoInput addTodo={addTodo} />
        </div>
    </div>
  )
}

export default TodoApp 