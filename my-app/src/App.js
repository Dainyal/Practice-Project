import logo from './images/mrgreedy.jpg';
import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [catFact, setCatFact] = useState("");
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data.age);
    });
  };

  // Generate once when DOM loads
  useEffect(() => {
    fetchCatFact();
  }, []);


  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <img src={logo} className="App-logo" alt="logo" />
      <p>List of Daily Word Games</p>
      <p>
        <a
          className="App-link"
          href="https://www.minutecryptic.com/"
          target="_blank"
        >
          MinuteCryptic
        </a>
      </p>
      <p>
        <a
          className="App-link"
          href="https://maptap.gg/"
          target="_blank"
        >
          Maptap
        </a>
      </p>

      {/* </header> */}
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
      <input
        placeholder="Type Name Here"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age: {predictedAge}</h1>
    </div>
  );
}

export default App;
