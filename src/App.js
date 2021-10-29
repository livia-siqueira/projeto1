import ShowExpenses from "./components/ShowExpenses";

function App() {

  const expenses = [
    {
      title: 'Test 1',
      amount: 'Test1', 
      date: new Date(2021, 5, 21)
    },
    {
      title: 'Test 2',
      amount: 'Test2', 
      date: new Date(2022, 12, 31)
    },
    {
      title: 'Test 3',
      amount: 'Test3', 
      date: new Date(2012, 7, 7)
    }
  ];
  return (
    <div>
      <ShowExpenses items={expenses}/>
    </div>
  );
}

export default App;
