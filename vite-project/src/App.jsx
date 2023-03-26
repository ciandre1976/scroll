import { useState, useEffect } from "react";
import SelectElement from "./Comps/SelectElement";
import axios from "axios";
import "./App.css";
import { useQuery } from "react-query";
import Person from "./Comps/Person";

// Create a client

function App() {
  let [state, setState] = useState("");
  let [dataRep, setDataRep] = useState([]);
  let url_rep = `http://localhost:3000/representatives/${state}`;
  let url_sen = `http://localhost:3000/senators/${state}`;

  const fetchRepresentatives = async () => {
    const response = await axios.get(url_rep);
    return response;
  };

 
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  console.log(state);

  return (
    <div className="App">
      <SelectElement handleStateChange={handleStateChange} />
      {res?.map((person) => (
        <article>
          <Person person={person} />
        </article>
      ))}
    </div>
  );
}

export default App;
