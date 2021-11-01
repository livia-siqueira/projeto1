import { useState } from "react/cjs/react.development";
import Form from "../Form/Form";
import './RegisterExpense.css';


const RegisterExpense = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseDate = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseDate);
    }

    const changeOpen = () => {
        setIsOpen(true);
    }

    const changeClose = () =>{
        setIsOpen(false);
    }

    return (
        <div className="new-expense">
            {isOpen ? <Form onSaveExpenseDate={saveExpenseDateHandler} changeClose={changeClose}/> :
                (<><button type="button" onClick={changeOpen}>Add new expense</button></>)}
        </div>
    );
}

export default RegisterExpense;