import { useState, useEffect } from "react";
import SelectElement from "./Comps/SelectElement";
import axios from "axios";
import "./App.css";
import { useQuery } from "react-query";
import Person from "./Comps/Person";

// Create a client

function App() {
  let [state, setState] = useState("");
  let url_rep = `http://localhost:3000/representatives/${state}`;
  let url_sen = `http://localhost:3000/senators/${state}`;

  const fetchRepresentatives = async () => {
    const response = await axios.get(url_rep);
    return response;
  };


  useEffect(() => {
    const onScroll = (e) => {
      let fetching = false;
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        console.log("hi");
        fetching = false;
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [state]);

  let { data, isLoading } = useQuery("representatives", fetchRepresentatives);
  console.log(data);
  let res;

  data?.isLoading ? <p>Loading...</p> : (res = data?.data?.results);
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
