import React, { useState } from "react";
import "../styles/MainScreen.css";
import Todo from "./Todo";
import FlipMove from "react-flip-move";
function MainScreen() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  let inputData;
  const handleInput = (e) => {
    inputData = e.target.value;
    setInput(inputData);
  };
  const handleClick = (e) => {
    setData([...data, input]);
    document.getElementById("input__todoInput").value = "";
    setInput("");
  };
  // const handleDelete = () =>{
  //   setData(data.indexOf())
  //   console.log(data);
  // }
  // BEM - convention for the classnames
  return (
    <div className="main__screen">
      <div className="input__todo">
        <input
          id="input__todoInput"
          className="input__todoInput"
          type="text"
          onChange={handleInput}
        />
        <button className="input__todoButton" onClick={handleClick}>
          Add to List
        </button>
      </div>
      {/* <FlipMove> */}
      {data.map(
        (todo) =>
          todo !== "" && (
            <Todo
              text={todo}
              handleDelete={(e) => {
                setData(data.filter((number) => number !== todo));
              }}
            />
          )
      )}
      {/* </FlipMove> */}
    </div>
  );
}

export default MainScreen;
