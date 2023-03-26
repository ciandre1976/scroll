import { useState, useEffect } from "react";
import SelectElement from "./Comps/SelectElement";
import "./App.css";
import { useQuery } from "react-query";
import Person from "./Comps/Person";
import { fetchData } from "./Comps/fetchData";



function App() {
  let [state, setState] = useState("");
  let [dataRep, setDataRep] = useState([]);
  let url_rep = `http://localhost:3000/representatives/${state}`;
  let url_sen = `http://localhost:3000/senators/${state}`;

  const { data, isLoading } = useQuery(["representatives"], async () => {
    const res = await fetchData(url_rep);
    return res;
  });

  const SenatorResults = useQuery(["senators"], async () => {
    const res = await fetchData(url_sen);
    return res;
  });

  console.log("senators", SenatorResults?.data?.data?.results);

  useEffect(() => {
    try {
      setDataRep([...data?.data?.results]);
    } catch {
      console.log("cant do");
    }
  }, [state, data]);

  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  console.log(dataRep);

  return (
    <div className="App">
      <SelectElement handleStateChange={handleStateChange} />
      <div style={{ display: "Flex" }}>
        <div style={{ margin: "20px" }}>
          <h3>Representatives</h3>
          {dataRep.map((person) => (
            <Person person={person} />
          ))}
        </div>
        <div style={{ margin: "20px" }}>
          <h3>Senators</h3>
        </div>
      </div>
    </div>
  );
}
export default App;
