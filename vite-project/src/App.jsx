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

  const { data, isLoading } = useQuery(["representatives"], async () => {
    const res = await fetchData(url_rep);
    return res;
  });

  useEffect(() => {
    try {
      setDataRep([...data?.data?.results]);
    } catch {
      console.log("cant d");
    }
  }, [state]);

  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  console.log(dataRep);

  return (
    <div className="App">
      <SelectElement handleStateChange={handleStateChange} />
    </div>
  );
}
export default App;
