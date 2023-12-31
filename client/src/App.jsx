import { useState } from "react";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function App() {
  const [result, setResult] = useState("");
  return (
    <>
      <h1>MERN render</h1>
      <button
        onClick={() => {
          fetch(`${URL}/ping`)
            .then((response) => response.json())
            .then((data) => setResult(data));
        }}
      >
        Users
      </button>
      <h2>{JSON.stringify(result)}</h2>
    </>
  );
}

export default App;
