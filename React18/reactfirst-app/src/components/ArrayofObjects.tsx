import React, { useState } from 'react'

export default function ArrayofObjects() {
    const [bugs,setBugs] = useState([
        {id:1, title:"Bug1", fixed:false},
        {id:2, title:"Bug2", fixed:false}
    ]);
   const handleClick =() =>{
    setBugs(bugs.map(bug => bug.id ===1 ?
        {
            ...bug, fixed:true
        }: bug));

    }
  return (
    <>
    <div>ArrayofObjects</div>
    {bugs.map(bug => <><span>{bug.title} - {bug.fixed ? 'yes' : 'no'}</span><br></br></>)}
        <button onClick={handleClick}>Click Me</button>
    </>
  )
}
