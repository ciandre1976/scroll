import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  console.log(state);

  return (
    <div className="App">
      <label htmlFor="select">State : </label>
      <select name="select" onChange={handleStateChange}>
        <option value="Way">Wayoming</option>
        <option value="Ten">Tenesi</option>
      </select>
    </div>
  );
}

export default App;
