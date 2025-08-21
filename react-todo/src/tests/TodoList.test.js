import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList.jsx'

describe('TodoList', () => {
  test('initial render shows demo todos', () => {
    render(<TodoList />)
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Write tests')).toBeInTheDocument()
  })

  test('adding a new todo works', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('Add a new todo')
    const addBtn = screen.getByText('Add')

    fireEvent.change(input, { target: { value: 'New Task' } })
    fireEvent.click(addBtn)

    expect(screen.getByText('New Task')).toBeInTheDocument()
    expect(input.value).toBe('')
  })

  test('toggling a todo marks it completed and back', () => {
    render(<TodoList />)
    const item = screen.getByText('Learn React')

    // click to complete
    fireEvent.click(item)
    expect(item).toHaveClass('completed')

    // click to uncomplete
    fireEvent.click(item)
    expect(item).not.toHaveClass('completed')
  })

  test('deleting a todo removes it from the list', () => {
    render(<TodoList />)
    const item = screen.getByText('Write tests')
    const delBtn = item.parentElement.querySelector('button')

    fireEvent.click(delBtn)
    expect(screen.queryByText('Write tests')).not.toBeInTheDocument()
  })
})