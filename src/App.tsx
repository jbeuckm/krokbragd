import { useState } from "react";
import { Krokbragd } from "./Krokbragd";
import "./App.css";

function App() {
  const [sett, setSett] = useState(7);
  const [ppi, setPpi] = useState(40);

  return (
    <div className="App">
      <Krokbragd width={800} height={600} sett={sett} ppi={ppi} />
    </div>
  );
}

export default App;
