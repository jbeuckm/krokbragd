import { useState } from "react";
import { Krokbragd } from "./Krokbragd";
import "./App.css";

function App() {
  const [sett, setSett] = useState(7);
  const [ppi, setPpi] = useState(40);

  return (
    <div className="App">
      <div className="controls">
        Sett = {sett}
        <input
          type="range"
          min="1"
          max="15"
          value={sett}
          id="sett"
          /* @ts-ignore */
          onChange={(event) => setSett(event.target.value)}
        />
        PPI = {ppi}
        <input
          type="range"
          min="4"
          max="100"
          value={ppi}
          id="ppi"
          /* @ts-ignore */
          onChange={(event) => setPpi(event.target.value)}
        />
      </div>

      <Krokbragd width={600} height={800} sett={sett} ppi={ppi} />
    </div>
  );
}

export default App;
