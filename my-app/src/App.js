import logo from './images/mrgreedy.jpg';
import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [error, setError] = useState("");
  const [catFact, setCatFact] = useState("");
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  const [pokemon, setPokemon] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState("");


  const fetchPokemon = () => {
    setError("");
    setPokemonInfo(null);
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => {
        setPokemonInfo(res.data.id);
        console.log(res.data);
      })
      .catch((err) => {
        setError("Pokemon not found or API request failed");
        console.log(err);
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
        placeholder="Type Word Here"
        onChange={(event) => {
          setPokemon(event.target.value);
        }}
      />
      <button onClick={fetchPokemon}>Pokemon Search</button>
      <p>
        {error ? "Pokemon not found"
          : `${pokemon} pokedex number: ${pokemonInfo}`}
      </p>
    </div>
  );
}

export default App;
