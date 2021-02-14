import TodoList from './components/todo/TodoList'

function App() {
  const todos = [
  {id: 1, completed: false, title: 'User APi testing'},
  {id: 2, completed: false, title: 'Article workflow implementation'},
  {id: 3, completed: false, title: 'Article API testing'}
  ]

  return (
    <div className="wrapper">
      <h1>Plans</h1>
      < TodoList todos={todos} />
    </div>
  );
}

export default App;
