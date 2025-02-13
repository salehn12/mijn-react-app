
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((json) => setData(json.message));
  }, []);

  return <h1>{data || "Laden..."}</h1>;
}

export default App;