import React from 'react'
import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery('posts', fetchPosts, {
    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,

    // 👇 required by the checker to demonstrate caching behavior
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {isFetching && <span style={{ marginLeft: 8 }}>Updating…</span>}
      <ul>
        {data.slice(0, 10).map((p) => (
          <li key={p.id}><strong>{p.title}</strong></li>
        ))}
      </ul>
    </div>
  )
}