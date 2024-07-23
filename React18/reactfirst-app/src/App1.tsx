import React, { useState } from 'react'

export const App1 = () => {
    const [person, setPerson]=useState({
        firstName: '',
        lastName: ''
    });
    const [isLoading, setLoading] = useState(false);
  return (
    <div>App1</div>
  )
}
