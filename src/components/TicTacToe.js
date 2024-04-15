import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

export default function TicTacToe() {
  const [count, setCount] = useState(0);
  const [lock, setlock] = useState(false);
  const [data, setdata] = useState(["", "", "", "", "", "", "", "", ""]);
  let title = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const reset = () => {
    setdata([]);
    setCount(0);
    setlock(false);
    title.current.innerHTML = "Welcome to TicTacToe Game";
    box_array.map((val) => {
      val.current.innerHTML = "";
    });
  };

  const toggle = (e, value) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${cross_icon}></img>`;
      setCount(count + 1);
      data[value] = "X";
    } else if (count % 2 === 1) {
      e.target.innerHTML = `<img src=${circle_icon}></img>`;
      setCount(count + 1);
      data[value] = "O";
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== " ") {
      winner(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== " ") {
      winner(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== " ") {
      winner(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== " ") {
      winner(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== " ") {
      winner(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== " ") {
      winner(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== " ") {
      winner(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== " ") {
      winner(data[6]);
    } else if (!data.every((element) => element === "")) {
      winner("temp");
    }
  };

  const winner = (player) => {
    if (player === "X") {
      setlock(true);
      title.current.innerHTML = `⭐ Player 1 Wins`;
    } else if (player === "O") {
      setlock(true);
      title.current.innerHTML = `⭐ Player 2 Wins`;
    } else if (player === "temp" && count >= 8) {
      title.current.innerHTML = `Draw`;
    }
  };
  return (
    <>
      <div className="container">
        <div ref={title} className="title">
          Welcome to TicTacToe Game
        </div>
        <div className="turn-desc">
          Player 1 : <img src={cross_icon}></img>
          <br />
          Player 2 : <img src={circle_icon}></img>
        </div>
        <div className="board">
          <div className="row1">
            <div
              onClick={(e) => {
                toggle(e, 0);
              }}
              className="box"
              ref={box1}
            ></div>
            <div
              onClick={(e) => {
                toggle(e, 1);
              }}
              className="box"
              ref={box2}
            ></div>
            <div
              onClick={(e) => {
                toggle(e, 2);
              }}
              className="box"
              ref={box3}
            ></div>
          </div>
          <div className="row2">
            <div
              onClick={(e) => {
                toggle(e, 3);
              }}
              className="box"
              ref={box4}
            ></div>
            <div
              onClick={(e) => {
                toggle(e, 4);
              }}
              className="box"
              ref={box5}
            ></div>
            <div
              onClick={(e) => {
                toggle(e, 5);
              }}
              className="box"
              ref={box6}
            ></div>
          </div>
          <div className="row3">
            <div
              onClick={(e) => {
                toggle(e, 6);
              }}
              className="box"
              ref={box7}
            ></div>
            <div
              onClick={(e) => {
                toggle(e, 7);
              }}
              className="box"
              ref={box8}
            ></div>
            <div
              onClick={(e) => {
                toggle(e, 8);
              }}
              className="box"
              ref={box9}
            ></div>
          </div>
        </div>

        <button onClick={reset} type="submit">
          Reset
        </button>

        <br />
      </div>
    </>
  );
}
