import Balance from "./components/Balance";
import Spending from "./components/Spending";
import "./expense.scss";

function App() {
  return (
    <div className="container">
      <Balance />
      <Spending />
    </div>
  );
}

export default App;
