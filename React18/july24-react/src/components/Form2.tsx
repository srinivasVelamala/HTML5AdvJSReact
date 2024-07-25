import React, { FormEvent, useRef, useState } from 'react'

export const Form2 = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const [person, setPerson] = useState({name:'' , age:0});

    const handleSubmit = (event: FormEvent)=>{
        event.preventDefault();
        console.log(person);
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Name in Form2</label>
            <input onChange={(event) =>  
              setPerson(
              {...person, name: event.target.value}
            )} id="name" type="text" value={person.name}
            className="form-control" />
        </div>
        <div className="mb-3"><label htmlFor="" className="form-label">Age</label>
        <input onChange={(event) => {
          setPerson({...person,age:parseInt(event.target.value)})
        }}
        id="age" value={person.age} type="number" className="form-control" /></div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}
