import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Persons from "./routes/Persons.jsx";
import Root from "./routes/Root.jsx";
import Users from "./routes/Users.jsx";
import axios from "axios";
import Todo from "./routes/Todo.jsx";
import Posts from "./routes/Posts.jsx";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Margit", title: "CEO", age: 29, location: "Helsinki" },
    { id: 2, name: "Kati", title: "developer", age: 25, location: "NY" },
    { id: 3, name: "Karin", title: "designer", age: 45, location: "Tartu" },
  ]);

  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setposts] = useState([]);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  };

  const fetchTodos = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setposts(res.data);
    });
  };

  useEffect(() => {
    fetchData();
    fetchTodos();
    getPosts();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/persons", element: <Persons persons={persons} /> },
        { path: "/users", element: <Users users={users} /> },
        { path: "/todos", element: <Todo todos={todos} /> },
        { path: "/posts", element: <Posts posts={posts} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
