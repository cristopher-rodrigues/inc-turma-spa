import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [team, setTeam] = useState();
  const [players, setPlayers] = useState();

  return (
    <div>
      <h1>selecione o seu time</h1>
      <form>
        <select
          onChange={(event) => {
            setTeam(event.target.value);
          }}
        >
          <option value="">Selecione...</option>
          <option value="gremio">Gremio</option>
          <option value="internacional">Internacional</option>
        </select>
        <button
          disabled={!team}
          type="button"
          onClick={async () => {
            const response = await fetch(`http://localhost:4000/teams/${team}`);
            const resp = await response.json();

            setPlayers(resp.players);
          }}
        >
          submit
        </button>
        <ul>
          {players?.map((player) => {
            return <li key={player}>{player}</li>;
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
