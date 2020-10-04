import React, { useState, useEffect } from "react";
import "./main.css";
async function fetchData() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  return response.json();
}

export default function App() {
  const [repoData, setRepoData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const pikapika = await fetchData();
      setRepoData(pikapika);
    } catch {
      setError("エラーさんを選びました。");
    }
    setLoading(false);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="Container">
      {!isLoading && repoData && (
        <div className="">
          <h1>Pokemon list</h1>
          {repoData.results.map((item) => (
            <div className="content-container">
              <ul>
                <li>{item.name}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
