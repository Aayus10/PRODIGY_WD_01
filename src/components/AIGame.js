import React, { useRef, useState, useEffect } from "react";
import "./TicTacToe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
export default function AIGame() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const title = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  useEffect(() => {
    if (!isPlayerTurn && !lock) {
      // If it's the computer's turn, make a move after a short delay
      const aiMoveTimeout = setTimeout(() => {
        makeAIMove();
      }, 1000);

      return () => clearTimeout(aiMoveTimeout);
    }
  }, [isPlayerTurn, lock]);

  const reset = () => {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
    title.current.innerHTML = "Welcome to TicTacToe Game";

    // Clear innerHTML for each box directly
    boxArray.forEach((box) => {
      if (box && box.current) {
        box.current.innerHTML = "";
      }
    });
  };

  const toggle = (index) => {
    if (lock || data[index]) {
      return;
    }

    if (count % 2 === 0) {
      setData((prevData) => {
        const newData = [...prevData];
        newData[index] = "X";
        return newData;
      });
      setCount((prevCount) => prevCount + 1);
    } else {
      setData((prevData) => {
        const newData = [...prevData];
        newData[index] = "O";
        return newData;
      });
      setCount((prevCount) => prevCount + 1);
    }

    checkWin();
    setIsPlayerTurn(!isPlayerTurn);
  };

  const makeAIMove = () => {
    const emptySquares = data.reduce((acc, value, index) => {
      if (!value) {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const aiMove = emptySquares[randomIndex];

    setData((prevData) => {
      const newData = [...prevData];
      newData[aiMove] = "O";
      return newData;
    });

    setIsPlayerTurn(true);
    setCount((prevCount) => prevCount + 1);

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
    }
  };

  const winner = (player) => {
    if (player === "X") {
      setLock(true);
      title.current.innerHTML = `⭐ Player Wins`;
    } else if (player === "O") {
      setLock(true);
      title.current.innerHTML = `⭐ Computer Wins`;
    }
  };
  return (
    <>
      <div className="container">
        <div ref={title} className="title">
          Welcome to TicTacToe Game
        </div>
        <div className="turn-desc">
          Player: <img src={cross_icon}></img>
          <br />
          Computer : <img src={circle_icon}></img>
        </div>
        <div className="board">
          <div className="row1">
            {boxArray.slice(0, 3).map((box, index) => (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="box"
                ref={box}
              >
                {data[index] === "X" && (
                  <img src={cross_icon} alt="Cross Icon" />
                )}
                {data[index] === "O" && (
                  <img src={circle_icon} alt="Circle Icon" />
                )}
              </div>
            ))}
          </div>
          <div className="row2">
            {boxArray.slice(3, 6).map((box, index) => (
              <div
                key={index + 3}
                onClick={() => toggle(index + 3)}
                className="box"
                ref={box}
              >
                {data[index + 3] === "X" && (
                  <img src={cross_icon} alt="Cross Icon" />
                )}
                {data[index + 3] === "O" && (
                  <img src={circle_icon} alt="Circle Icon" />
                )}
              </div>
            ))}
          </div>
          <div className="row3">
            {boxArray.slice(6, 9).map((box, index) => (
              <div
                key={index + 6}
                onClick={() => toggle(index + 6)}
                className="box"
                ref={box}
              >
                {data[index + 6] === "X" && (
                  <img src={cross_icon} alt="Cross Icon" />
                )}
                {data[index + 6] === "O" && (
                  <img src={circle_icon} alt="Circle Icon" />
                )}
              </div>
            ))}
          </div>
        </div>
        <button onClick={reset} type="submit">
          Reset
        </button>
        <button type="button" onClick={() => window.location.reload()}>
          Reset
        </button>
      </div>
    </>
  );
}
