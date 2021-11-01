import { useState } from "react/cjs/react.development";
import ShowExpenses from "./components/Expenses/ShowExpenses/ShowExpenses";
import RegisterExpense from "./components/RegisterExpenses/RegisterExpense/RegisterExpense";


const expenses__initial = [
  {
    id: 'e1',
    title: 'Test 1',
    amount: 20.98, 
    date: new Date(2021, 5, 21)
  },
  {
    id: 'e2',
    title: 'Test 2',
    amount: 12.9, 
    date: new Date(2019, 8, 31)
  },
  {
    id: 'e3',
    title: 'Test 3',
    amount: 310.90, 
    date: new Date(2019, 7, 7)
  }
];

function App() {


  const [totalExpense, setExpenses] = useState(expenses__initial);

  const addExpense = (expense) =>{
    setExpenses((prevExpense) => {
      return [expense, ...totalExpense];
    })
  }
  return (
    <div>
      <RegisterExpense onAddExpense = {addExpense}/>
      <ShowExpenses items={totalExpense}/>
    </div>
  );
}
 
export default App;
