import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setitems] = useState([]);

  function insertInput(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setitems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={insertInput}
          type="text"
          placeholder="Write Here!"
          value={inputText}
        />
        <button type="submit">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
