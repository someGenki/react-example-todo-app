import React from 'react';
import styles from './todo.module.css';

interface TodoFilterProps {
  change: (id: string) => void,
  selected?: string
}

export default function TodoFilter(props: TodoFilterProps) {
  const filters = [
    {label: '全部', value: 'all'},
    {label: '已完成', value: 'done'},
    {label: '未完成', value: 'todo'},
  ]

  return (
    <div className={styles.todo_filters}>
      {filters.map((item, index) => (
        <span key={item.value} onClick={() => props.change(item.value)}
              className={[styles.todo_filter, (props.selected === item.value ? styles.active : null)].join(" ")}
        >
          {item.label}
        </span>
      ))}
    </div>
  )
}
