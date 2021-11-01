
import { useState } from 'react';
import './Form.css';

const Form = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    /*const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })*/

    const titleChange = (event) => {
        setTitle(event.target.value);

        /*
        setUserInput({
            ...userInput,
            title: event.target.value // pode ter problema de atualização do estado
        })

        setUserInput((prevState) => {
            return {...prevState, title: event.target.value} // com arrow function ele garante que o estado de todos estejam atualizados
        })*/
    }
    const amountChange = (event) => {
        setAmount(event.target.value);
    }

    const dateChange = (event) => {
        setDate(event.target.value);
    }

    const clickHandler = (event) => {
        event.preventDefault();
        const newExpense = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        props.onSaveExpenseDate(newExpense);
        setTitle('');
        setDate('');
        setAmount('');
        props.changeClose();
    }
    
    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                        value={title}
                        onChange={titleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' max='0.01'
                        value={amount}
                        onChange={amountChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31'
                        value={date}
                        onChange={dateChange} />
                </div>
            </div>
            <div className="new-expense__action">
                <button type="button" onClick={props.changeClose}>Cancel</button>
                <button type="submit" onClick={clickHandler}>Add expense</button>
            </div>

        </form>
    );
}
export default Form;