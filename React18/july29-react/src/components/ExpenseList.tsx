import React from 'react'

interface Expense {
    id:number;
    description:string;
    amount: number;
    category: string;
}
interface Props {
    expenses: Expense[];
    onDelete: (id:number) => void;
}
export const ExpenseList = ({expenses, onDelete}: Props) => {
  return (
    <>
        <div>ExpenseList</div>
        <table className="table table-bordered">
            <thead>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {expenses.map(expense => 
                    <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>
                           <button className="btn btn-outline-success"
                           onClick={() => onDelete(expense.id)}>
                            Delete</button> 
                        </td>
                    </tr>)}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${expenses.reduce((acc, expense)=> expense.amount + acc, 0).toFixed(2)}</td>
                    <td>Total</td>
                </tr>
            </tfoot>
        </table>
    </>
  )
}
