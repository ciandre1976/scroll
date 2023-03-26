import { useState, useEffect } from "react";
import SelectElement from "./Comps/SelectElement";
import axios from "axios";
import "./App.css";
import { useQuery } from "react-query";
import Person from "./Comps/Person";
import { fetchData } from "./Comps/fetchData";

// Create a client

function App() {
  let [state, setState] = useState("");
  let [dataRep, setDataRep] = useState([]);
  let url_rep = `http://localhost:3000/representatives/${state}`;
  let url_sen = `http://localhost:3000/senators/${state}`;

  const res = fetchData(url_rep);

  console.log("res", res);

  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  console.log(state);

  return (
    <div className="App">
      <SelectElement handleStateChange={handleStateChange} />
    </div>
  );
}
export default App;
