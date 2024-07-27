import React, { FormEvent, useState } from 'react'

export const ArrayUpdating = () => {
    const [tags, setTags] = useState(['happy','cheerful']);
    const handleClick =(event: FormEvent) => {
        //Add
        //setTags([...tags,'exciting']);
        //Remove
        //setTags(tags.filter(tag => tag !== 'happy'));
        //update
        setTags(tags.map(tag => tag === 'happy' ? 'happiness' : '-'));
        event.preventDefault();
    }
  return (
    <div>
        {tags.map(tag => <><span>{tag}</span><br></br></>)}
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
