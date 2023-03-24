import { useState, useEffect } from "react";
import SelectElement from "./Comps/SelectElement";
import "./App.css";

function App() {
  const [state, setState] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  useEffect(() => {
    console.log("refetch...");
    return () => {};
  }, [state]);

  console.log(state);

  return (
    <div className="App">
      <SelectElement handleStateChange={handleStateChange} />
      <p>{state}</p>
    </div>
  );
}

export default App;
