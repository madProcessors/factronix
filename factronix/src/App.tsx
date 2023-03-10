import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Button, Input } from "@mui/material";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Factronix!</h1>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={greet}>a button</Button>
      <p>{name}</p>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
