import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import List from "./List";
import React from "react";

function App() {
  const [people, setPeople] = React.useState(data);
  return (
    <div className="App">
      <section className="container">
        <h4>{people.length} birthday to day</h4>
        <List people={people} />

        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </div>
  );
}

export default App;
