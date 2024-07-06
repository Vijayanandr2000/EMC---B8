import { useEffect, useState } from "react";

const Todo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoLists, setTodoLists] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://emc-b8-todo-be.onrender.com/todolists");
    const resData = await res.json();

    if (resData.status === 200) {
      setTodoLists(resData.data);
    }
  };

  const addTodoListData = async () => {
    const res = await fetch("https://emc-b8-todo-be.onrender.com/todolists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoValue,
      }),
    });
    return res;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addTodoListData();

    console.log(res);

    if (res.ok) {
      fetchData();
      setTodoValue("");
    }
  };

  const handleChange = (e) => {
    let todoInput = e.target.value;
    setTodoValue(todoInput);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Add TODO : </label>
        <input
          type="text"
          id="todoInput"
          placeholder="Enter the TODO for the day..."
          value={todoValue}
          required
          onChange={handleChange}
        />
        <button type="submit">ADD</button>
      </form>

      <ol>
        {todoLists.map((todoList) => (
          <li>{todoList.value}</li>
        ))}
      </ol>
    </>
  );
};

export default Todo;
