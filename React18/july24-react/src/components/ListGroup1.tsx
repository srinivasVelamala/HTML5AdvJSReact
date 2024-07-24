import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup1(){
  let items=[
    'Hyderabad',
    'Chennai',
    'Delhi',
    'Mumbai',
    'Kolkata'
  ];
  
   return (
    <> 
    <h1>List</h1>
    <ul className="list-group">
    {items.map((item,index) => (
    <li key={index} className="list-group-item">{item}</li>
    ))}
   </ul>
  </>
   )
}
export default ListGroup1;