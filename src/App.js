import React from 'react';
import TodoList from './components/todo/TodoList'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'User APi testing'},
    {id: 2, completed: false, title: 'Article workflow implementation'},
    {id: 3, completed: false, title: 'Article API testing'}
  ])

  function changeTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  return (
    <div className="wrapper">
      <h1>Plans</h1>
      < TodoList todos={todos} onChange={changeTodo} />
    </div>
  );
}

export default App;
