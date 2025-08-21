import React, { useState } from 'react'

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} aria-label="add-todo-form" style={{ marginBottom: 12 }}>
      <input
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: 8 }}>Add</button>
    </form>
  )
}