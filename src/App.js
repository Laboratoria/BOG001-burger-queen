import React from "react";
import "./App.css";
import  Bar  from "./components/Bar";
import { MenuBreakfast } from "./components/MenuBreakfast";
import { MenuSupper } from "./components/MenuSupper";

function App() {
  return (
    <div>
      <Bar />
      <MenuBreakfast />
      <MenuSupper />
    </div>
  );
}

export default App;