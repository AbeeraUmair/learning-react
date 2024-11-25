import BookCreate from '@/app/components/book-app/BookCreate'
import BookList from '@/app/components/book-app/BookList'
import React from 'react'

const BookApp = () => {
const handleSubmit = () => {

}
    
  return (
    <div>
      <BookCreate onSubmit={handleSubmit} />
      <BookList />
    </div>
  )
}

export default BookApp
