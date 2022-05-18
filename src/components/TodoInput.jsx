import React, { useState } from "react";
import styles from './todo.module.css';

function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");
  return (
    <div className={styles.firstDiv}>
      <input className={styles.inputBox}
        type="text"
        placeholder="Add Something"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className={styles.btn1}
        disabled={!value}
        onClick={() => {
        //   console.log(value);
          addTodo(value);
          setValue("");


          // if(value){
          //     console.log(value)
          //     addTodo(value);
          //     setValue('')
          // }
          // else{
          //     alert("Please write something")
          // }
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
