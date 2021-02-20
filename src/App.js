import React, { useEffect } from 'react';
import Context from './context'
import TodoList from './components/todo/TodoList'
import Loader from './loader'

// to optimize loading process, put some components in chunks to make it lazy loaded
const AddTodo = React.lazy(() => import('./components/todo/AddTodo'))

//useState always returns 2 element array.
// First element is state, second is a function to change this state
function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10').
        then(response => response.json()).
        then(todos => {
          setTimeout(() => {
            setTodos(todos)
            setLoading(false)
          }, 1000)
        })
  }, [])

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
        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={ addTodo } />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? (
            < TodoList todos={todos} />
        ) : loading ? null : (
            <p>You don't have any TODOs</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
