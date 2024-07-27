import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import ListGroup from './components/ListGroup';
import ListGroup1 from './components/ListGroup1';
import { FirstForm } from './components/FirstForm';
import { Form1 } from './components/Form1';
import ArrayofObjects from './components/ArrayofObjects';
import ExpenseForm from './components/expense-tracker/components/ExpenseForm';
import { ExpenseFilter } from './components/expense-tracker/components/ExpenseFilter';
import { ExpenseList } from './components/expense-tracker/components/ExpenseList';
import { ArrayUpdating } from './components/ArrayUpdating';
import { HookForm } from './components/HookForm';
import { GetUsers } from './components/GetUsersFromApi/GetUsers';

function App() {
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
    <div >
      <h1>Welcome to React</h1>
      {/* <Message></Message>
      <ListGroup></ListGroup>
      <ListGroup1></ListGroup1>
      <FirstForm></FirstForm> 
      <Form1></Form1>

      <ArrayofObjects></ArrayofObjects>*/}
      {/* <div className="mb-5">
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
      <HookForm></HookForm>*/}
      <GetUsers></GetUsers>
    </div>
  );
}

export default App;
