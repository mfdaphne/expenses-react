import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  const expenseFormVisibility = (visible) => {
    setFormVisibility(visible);
  };

  return (
    <div className="new-expense">
        { !formVisibility && <button type="button" onClick={expenseFormVisibility}>Add New Expense</button>}
        { formVisibility && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={expenseFormVisibility}/>}
      
    </div>
  );
};

export default NewExpense;
