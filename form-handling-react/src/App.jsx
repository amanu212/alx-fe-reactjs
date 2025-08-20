import { useState } from 'react'
import FormikForm from "./components/formikForm";

export default function RegistrationForm({ onSubmit }) {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.username.trim()) newErrors.username = 'Username is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Email is invalid'
    if (!form.password) newErrors.password = 'Password is required'
    else if (form.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // mock API submit
    onSubmit?.(form)
    // reset
    setForm({ username: '', email: '', password: '' })
  }

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <h2>User Registration (Controlled)</h2>

      <label>
        Username
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="e.g. roble_dev"
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="minimum 6 characters"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>

      <button type="submit">Register</button>
    </form>
  )
}