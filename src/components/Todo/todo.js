import {createContext, useMemo, useState} from "react";
import TodoAdd from "./todo-add";
import TodoFilter from "./todo-filter";
import TodoList from "./todo-list";
import styles from './todo.module.css';

export const TodoContext = createContext({});

export default function Todo() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  // useCallback 跟useMemo差不多，只不过是返回函数 (都是用于减少不必要的计算)
  // useMemo 收集依赖(依赖的比较只有浅层的)，仅会在某个依赖项改变时才重新计算新值并返回
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'done':
        return todos.filter((todo) => todo.completed)
      case 'todo':
        return todos.filter((todo) => !todo.completed)
      default:
        return todos
    }
  }, [todos, filter])

  const changeTodo = (newTodo) => {
    setTodos((prevState) => {
      prevState.forEach(e => (e.id === newTodo.id) && (Object.assign(e, newTodo)))
      return [...prevState] /* 要返回新数组，这样才能被检测到state更新 */
    })
  }

  return (
    <div className={styles.todo_container}>
      <h1>To Do 待办事项！</h1>
      <TodoContext.Provider value={{changeTodo}}>
        <TodoAdd tid={todos.length} add={todo => setTodos([...todos, todo])}/>
        <TodoFilter selected={filter} change={value => setFilter(value)}/>
        <TodoList todos={filteredTodos}/>
      </TodoContext.Provider>
    </div>)
}
