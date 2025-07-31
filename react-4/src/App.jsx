import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState({});
  const [userId, setUser] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //useEffect(() => {
  //form
  useEffect(() => {
    console.log("useEffect called");
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        // setTodo(data[0]); // Assuming you want to set the first todo as the current todo
      });
    //api call,state change,function call
  }, [userId]); //dependency array

  const handlePadination = (userId) => {
    console.log("handlePadination called", userId);
    setUser(userId);
  };
  // console.log(todo);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("form submitted");
  };

  const handleChange = (event) => {
    event.target.value;
    console.log("handleChange called", event.target.value);
  };
  return (
    <>
      <div>
        <h1>{todos.length}</h1>

        {/* <h1>{todo.title}</h1> */}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.id} - {todo.title}
            </li>
          ))}
        </ul>
        <button onClick={() => handlePadination(1)}>1</button>
        <button onClick={() => handlePadination(2)}>2</button>

        <br />

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
          />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
          />
          <br />
          <br />

          <label htmlFor="phone">Phone</label>
          <input
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            name="phone"
          />
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default App;

//jsonplaceholder-dummyapi
