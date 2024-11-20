import React, { useState } from 'react'

const BookCreate = () => {
    const [term,setTerm]=useState("ASD")


const    handleSubmit = (e ) =>{
e.preventDefault()
onsubmit()
};

const    handleChange = (e) =>{
setTerm(e.target.value)
};
    
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <label >ENter Book Name</label>
      <input value={term} type="text" onChange={handleChange} />
    <button>Create</button>
    </div>
  )
}

export default BookCreate
