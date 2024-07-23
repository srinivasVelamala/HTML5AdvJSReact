import { useState } from "react";
import { ArrayUpdating } from "./components/ArrayUpdating";
import ArrayofObjects from "./components/ArrayofObjects";
import { Form1 } from "./components/Form1";
import { Form2 } from "./components/Form2";
import { HookForm } from "./components/HookForm";
import ListGroup from "./components/ListGroup";
import ListGroup1 from "./components/ListGroup1";
import { NestedObjectUpdate } from "./components/NestedObjectUpdate";
import { ExpenseList } from "./components/expense-tracker/components/ExpenseList";
import { ExpenseFilter } from "./components/expense-tracker/components/ExpenseFilter";
import {ExpenseForm} from "./components/expense-tracker/components/ExpenseForm";
import categories from "./components/categories";

function App() {
  let items = ["Hyderabad", "Chennai", "Delhi", "Mumbai", "Kolkata"];
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 30, category: "Goods" },
    { id: 3, description: "ccc", amount: 10, category: "Groceries" },
    { id: 4, description: "ddd", amount: 10, category: "Goods" },
  ]);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [selectedCategory, setSelectedCategry] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      {/* <ListGroup/> 
    <ListGroup1 items={items}
     heading="Indian Cities" onSelectItem={handleSelectItem}/>
  */}
      {/* <NestedObjectUpdate/>
  <ArrayUpdating/> 
  <ArrayofObjects/>
  <Form1/>
  
  <Form2/>
  <HookForm/>*/}
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses,
          {...expense, id: expenses.length+1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategry(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
