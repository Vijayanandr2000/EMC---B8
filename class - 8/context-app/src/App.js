import logo from "./logo.svg";
import "./App.css";
import Head1 from "./components/Head1";
import { useState } from "react";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Head1 />
      </div>
    </CounterProvider>
  );
}

export default App;
