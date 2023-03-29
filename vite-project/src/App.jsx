import { useState, useEffect } from "react";
import SelectElement from "./Comps/SelectElement";
import "./App.css";
import { useQuery } from "react-query";
import Person from "./Comps/Person";
import { fetchData } from "./Comps/fetchData";

function App() {
  let [state, setState] = useState("");
  let [dataRep, setDataRep] = useState([]);
  let [dataSen, setDataSen] = useState([]);
  const [items, setItems] = useState([]);
  const [items1, setItems1] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  useEffect(() => {
    {
      try {
        setDataSen([...SenatorResults?.data?.data?.results]);
        setDataRep([...data?.data?.results]);
      } catch {
        console.log("cant do");
      }
    }
    return function cleanup() {
      if (dataRep !== null) return;
    };
  }, [state, dataRep]);

  useEffect(() => {
    const loadMore = async () => {
      if (loading) return;

      const newItems = dataRep;
      const newItems1 = dataSen;
      setItems((prev) => [...prev, ...newItems]);
      setItems1((prev) => [...prev, ...newItems1]);
      setLoading(false);
    };
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.offsetHeight;

      if (scrollTop + windowHeight > documentHeight - 100 && !loading) {
        setLoading(true);
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items, loading]);

  return (
    <div className="App">
      <SelectElement handleStateChange={handleStateChange} />
      <div style={{ display: "Flex" }}>
        <div style={{ margin: "20px" }}>
          <h3>Representatives</h3>
          {dataRep.map((person) => (
            <Person person={person} />
          ))}
          {items.map((person) => (
            <Person person={person} />
          ))}
        </div>
        <div style={{ margin: "20px" }}>
          <h3>Senators</h3>
          {dataSen.map((person) => (
            <Person person={person} />
          ))}
          {items1.map((person) => (
            <Person person={person} />
          ))}
          {loading && <p>Loading more items...</p>}
        </div>
      </div>
    </div>
  );
}
export default App;
