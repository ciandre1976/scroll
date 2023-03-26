import { useState, useEffect } from "react";
import SelectElement from "./Comps/SelectElement";
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

  const getData=async (){
  const res = await fetchData(url_rep);
  return res;
  }

  console.log("res", getData);

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="App">
      <SelectElement handleStateChange={handleStateChange} />
    </div>
  );
}
export default App;
