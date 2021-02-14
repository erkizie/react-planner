import React from 'react'

// Since we know the name of the key from props, we can use { todo } instead of props.todo
export default function TodoItem({ todo }) {
  return(
      <li>{todo.title}</li>
  )
}