import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import TicTacToe from "./components/TicTacToe"; // Assuming this is your Human vs Human component
import AIGame from "./components/AIGame";
import TicTacToeAI from "./components/TicTacToeAi";

export default function App() {
  return (
    <>
      <TicTacToe></TicTacToe>
    </>
  );
}
