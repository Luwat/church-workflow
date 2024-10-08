'use client'

import React from 'react'

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <h2>Something went wrong</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default ErrorPage
