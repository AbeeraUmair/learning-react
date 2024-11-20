import React from 'react'

const BookApp = () => {

    
  return (
    <div>
      <BookCreate onSubmit={handleSubmit} />
      <BookList />
    </div>
  )
}

export default BookApp
