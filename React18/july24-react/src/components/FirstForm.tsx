import React, { FormEvent, useRef } from 'react'

export const FirstForm = () => {
    const person ={name:'Venkat' , age:12}

  
  return (
    <form>
    <label>Enter your name:
      <input type="text" value={person.name} /> 
    </label>
    <label>Enter your age:
      <input type="text" value={person.age} />
    </label>
  </form>
  )
}
