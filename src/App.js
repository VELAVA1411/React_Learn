import "./styles.css";
import { useState } from "react";

export default function App() {
  // set todo values
  const [todos, setTodos] = useState([
    { text: "mango" },
    { text: "apple" },
    { text: "orange" },
    { text: "banana" }
  ]);

  // get user giveing value
  const [value, setValue] = useState("");

  // set user given value into  the todos
  const updateFruit = (event) => {
    event.preventDefault();
    if (!value) return;
    let newTodos = [...todos, { text: value }];
    setTodos(newTodos);
    setValue("");
  };

  //delete todos while user click the todos
  const removeFruits = (event) => {
    let index = event.target.id;
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  // render the todos in browser
  const fruits = (item, index) => (
    <div className="todos" key={index} id={index} onClick={removeFruits}>
      {item.text}, {index}
    </div>
  );
  return (
    <>
      {todos.map(fruits)}
      <form onSubmit={updateFruit}>
        <input
          type="text"
          placeholder="Add item"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </>
  );
}
