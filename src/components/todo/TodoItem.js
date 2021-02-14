import React from 'react'
import PropTypes from 'prop-types'

// Since we know the name of the key from props, we can use { todo } instead of props.todo
function TodoItem({ todo, index }) {
  return(
    <li>
      <strong>{index + 1}</strong >
      {todo.title}
    </li>
  )
}

//Validation
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem