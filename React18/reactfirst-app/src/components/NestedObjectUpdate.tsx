import React, { useState } from 'react'

export const NestedObjectUpdate = () => {
const[customer, setCustomer] = useState({
    name:'Nivas',
    address:{
        city:'Hyderabad',
        zipCode: 343434
    }
});

const handleClick =() => {
    setCustomer({...customer, address:{...customer.address,
    zipCode:222222}})
}

  return (
    <div>
        {customer.address.zipCode}
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
