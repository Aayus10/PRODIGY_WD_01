import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>Welcome to Tic Tac Toe</h1>
      <Link to="/human">Human vs Human</Link>
      <br />
      <Link to="/ai">Human vs AI</Link>
    </>
  );
}
