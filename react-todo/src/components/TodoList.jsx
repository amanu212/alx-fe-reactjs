import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm.jsx'
import './todo.css'

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Write tests', completed: false },
  { id: 3, text: 'Ship feature', completed: true },
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ])
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((t) => (
          <li key={t.id} style={{ marginBottom: 8 }}>
            <span
              onClick={() => toggleTodo(t.id)}
              className={t.completed ? 'completed' : ''}
              role="button"
            >
              {t.text}
            </span>
            <button
              onClick={() => deleteTodo(t.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}