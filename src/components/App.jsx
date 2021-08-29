import React, { useState } from "react";
import TodoList from "./TodoList";

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

  function deleteItem(id) {
    setitems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
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
        <button type="submit" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoList
              key={index}
              id={index}
              onChecked={deleteItem}
              text={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
