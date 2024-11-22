"use client"
import React, { useState } from 'react'

const BookCreate = ({ onSubmit }: { onSubmit: (term: string) => void }) => {
  const [term, setTerm] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    onSubmit(term)
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label >ENter Book Name</label>
      <input value={term} type="text" onChange={handleChange} />
      <button>Create</button>
      </form>
    </div>
  )
}

export default BookCreate
