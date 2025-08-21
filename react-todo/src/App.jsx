import React from 'react'
import TodoList from './components/TodoList.jsx'

export default function App() {
  return (
    <div style={{ maxWidth: 560, margin: '40px auto', padding: 16 }}>
      <h1>React Todo</h1>
      <TodoList /> {/* <-- exact text: TodoList */}
    </div>
  );
}