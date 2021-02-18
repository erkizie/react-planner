import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

//We have to send key with unique value to make React rendering the template more effectively
function TodoList(props) {
  return (
    <ul style={styles.ul}>
      { props.todos.map((todo, index) =>{
        return <TodoItem todo={todo} key={todo.id} index={index} />
      }) }
    </ul>
  );
}

//Validation
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoList