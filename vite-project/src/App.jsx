import { useState, useEffect } from "react";
import SelectElement from "./Comps/SelectElement";
import axios from "axios";
import "./App.css";
import { useQuery } from "react-query";

// Create a client

function App() {
  const [state, setState] = useState("");
  let url_rep = `http://localhost:3000/representatives/${state}`;
  let url_sen = `http://localhost:3000/senators/${state}`;

  const fetchRepresentatives = async () => {
    const response = await axios.get(url_rep);
    return response;
  };

  console.log(url_rep);
  console.log(url_sen);
  let res;

  const { data } = useQuery("representatives", fetchRepresentatives);
  console.log(data);
  data?.isLoading ? <p>Loading...</p> : (res = data?.data?.results);

  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  console.log("data je", res);

  return (
    <div className="App">
      <SelectElement handleStateChange={handleStateChange} />
      {res?.map((person) => (
        <article>
          <p>{person?.district}</p>
          <p>{person?.name}</p>
          <p>{person?.link}</p>
          <p>{person?.office}</p>
          <p>{person?.party}</p>
          <p>{person?.phone}</p>
          <p>{person?.state}</p>
        </article>
      ))}
    </div>
  );
}

export default App;
