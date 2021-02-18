import React from 'react';
import Context from './context'
import TodoList from './components/todo/TodoList'
import AddTodo from './components/todo/AddTodo';

//useState always returns 2 element array.
// First element is state, second is a function to change this state
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

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  // We can just use deleteTodo instead of key value pair since the name and value are similar
  return (
    <Context.Provider value={{ deleteTodo, changeTodo }}>
      <div className="wrapper">
        <h1>Plans</h1>
        <AddTodo onCreate={ addTodo } />
        {todos.length ? (
            < TodoList todos={todos} />
        ) : (
            <p>You don't have any TODO's</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
