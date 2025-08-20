import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import PostsComponent from './components/PostsComponent.jsx'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16 }}>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  )
}