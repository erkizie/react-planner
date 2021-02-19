import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },

  input: {
    marginRight: '1rem'
  }
}

// We send deleteTodo ke-value pair into context, so here on 24 line we can get it by key
// Since we know the name of the key from props, we can use { todo } instead of props.todo
function TodoItem({ todo, index }) {
  const { deleteTodo, changeTodo } = useContext(Context)
  const classes = []
  if (todo.completed) {
    classes.push('done')
  }

  return(
    <li style={styles.li} className={classes.join(' ')}>
      <span>
        <input type="checkbox"
               checked={todo.completed}
               style={styles.input}
               onChange={() => changeTodo(todo.id)}/>
        <strong>{index + 1}. </strong>
        &nbsp;
        {todo.title}
      </span>
      <button className='rm' onClick={() => deleteTodo(todo.id)}>&times;</button>
    </li>
  )
}

//Validation
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem