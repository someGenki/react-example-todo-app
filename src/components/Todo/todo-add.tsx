import React, {useState} from 'react';
import styles from './todo.module.css';
import {TodoItem} from "./todo";

interface TodoAddProps {
  tid: number,
  add: (item: TodoItem) => void
  completed?: boolean,
  content?: string
}

export default function TodoAdd(props: TodoAddProps) {
  const [todoContent, setTodoContent] = useState<string>('')

  const addTodo = () => {
    props.add({id: props.tid, content: todoContent})
    setTodoContent('')
  }

  return (
    <div className={styles.todo_add}>
      <input type="text" name="todo" placeholder="添加任务" value={todoContent}
             onKeyDown={event => (event.key === "Enter" && addTodo())}
             onChange={event => setTodoContent(event.target.value)}
      />
      <button onClick={addTodo}><i className={styles.plus}/></button>
    </div>
  )
}
