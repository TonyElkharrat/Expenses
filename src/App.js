import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "insurance", date: new Date(2021, 2, 8), amout: 450 },
    { title: "insurance", date: new Date(2021, 2, 8), amout: 450 },
    { title: "insurance", date: new Date(2021, 2, 8), amout: 450 },
    { title: "insurance", date: new Date(2021, 2, 8), amout: 450 },
    { title: "insurance", date: new Date(2021, 2, 8), amout: 450 },
    { title: "insurance", date: new Date(2021, 2, 8), amout: 450 },
  ];
  return (
    <div>
      <h2>Lets go</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
