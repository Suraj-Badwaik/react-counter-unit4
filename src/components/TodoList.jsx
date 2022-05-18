import React from 'react';
import styles from './todo.module.css';

function TodoList( {todos}) {
    return (
        <>
        <div >{todos.map(todo => {
            return (
                <div className={styles.todo}>
                    <div>{todo}</div>
                <span><input className={styles.checked} type="radio" /></span>
                </div>
            )
        })}</div>
        </>
      )
}

export default TodoList;