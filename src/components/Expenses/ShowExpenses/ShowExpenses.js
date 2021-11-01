import { useState } from "react/cjs/react.development";
import ExpensesFilter from "../../ExpensesFilter/ExpensesFilter";
import Card from "../../UI/Card";
import ExpenseList from "../ExpenseList/ExpenseList";
import './ShowExpenses.css';
import ExpenseChart from "../ExpenseChart/ExpenseChart";


function ShowExpenses(props) {

    const [filteryear, setFilterYear] = useState('2020');

    const filterYear = (year) => {
        setFilterYear(year);
    }

    const filterItems = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteryear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteryear} onChangeYear={filterYear} />
                <ExpenseChart expenses={filterItems}/>
                <ExpenseList items={filterItems}/>
            </Card>
        </div>

    );
}
export default ShowExpenses;