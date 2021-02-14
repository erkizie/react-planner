import React from 'react';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

//We have to send key with unique value to make React rendering the template more effectively
export default function TodoList(props) {
  return (
    <ul style={styles.ul}>
      { props.todos.map(todo =>{
        return <TodoItem todo={todo} key={todo.id} />
      }) }
    </ul>
  );
}