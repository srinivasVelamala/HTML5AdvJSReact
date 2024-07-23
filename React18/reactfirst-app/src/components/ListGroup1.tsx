import { MouseEvent } from "react";
import { useState } from "react";
interface ListGroupProps{
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}
function ListGroup({items, heading, onSelectItem}: ListGroupProps){

  //let selectedIndex = 1;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name,setName] = useState('');
  //items=[];
  const getMessage =() => {
    return items.length === 0 ? <p> No item found</p> : null;
  }
  // const handleClick =(event: MouseEvent) => {
  // console.log(event) ;
  // }   
  
   return (
    <> 
    <h1>{heading}</h1>
    {getMessage()}
    {items.length === 0 && <p>No item found..</p>}
    <ul className="list-group">
    {items.map((item,index) => (
    <li key={index} className={selectedIndex === index ?
       'list-group-item active' :'list-group-item'} 
    // onClick={handleClick}>{item}</li>
    onClick={() => {setSelectedIndex(index);
    onSelectItem(item)}}>{item}</li>
    ))}
   </ul>
  </>
    );
}
export default ListGroup;