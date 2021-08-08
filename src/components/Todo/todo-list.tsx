import React, {useContext} from 'react';
import styles from './todo.module.css';
import {TodoContext, TodoItem} from "./todo";


function TodoListItem(props: { todo: TodoItem }) {
  const {changeTodo} = useContext(TodoContext);
  const {todo} = props
  return (
    <div className={styles.todo_item}>
      <label className={todo.completed ? styles.completed : ''}>
        {/* 这里涉及到受控组件和非受控组件的概念 */}
        <input type="checkbox" defaultChecked={todo.completed}
               onChange={$event => {
                 /* 待优化：如果filter === 'all' 可以不改变todos吧(那么该组件就不是纯函数组件) */
                 todo.completed = $event.target.checked
                 changeTodo?.(todo)
               }}/>
        {todo.content}
        <span className={styles.check_button}/>
      </label>
    </div>
  )
}

export default function TodoList(props: { todos: TodoItem[]; }) {
  return (
    <div className={styles.todo_list}>{props.todos.map
    (item => (<TodoListItem key={item.id} todo={item}/>))
    }</div>
  )
}
