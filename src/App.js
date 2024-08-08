import logo from "./Logo.png";
import UserInput from "./component/EquationInputForm/EquationInputForm";
import "./App.css";

function App() {
  return (
    <div className="Milesianpy-body">
      <img src={logo} className="Milesianpy-logo" alt="milesianpy-logo" />
      <UserInput />
    </div>
  );
}

export default App;
