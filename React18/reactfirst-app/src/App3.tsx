import React, { useState } from 'react'

export const App3 = () => {
    const[value,setValue] = useState(1);
    const[drink,setDrink] = useState({
        title:'Pepsi',
        price:5
    });
    const handleClick = () => {
    setDrink({...drink, price:10});
    };
  return (
    <div>
        {drink.price}
        <br>
        </br>
        <button onClick={handleClick}>
            Click Me
        </button>
    </div>
  )
}
