import { type ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import Home, { type UserType } from "./Home";

async function fetchData(url: string) {
  const response = await fetch(url);
  const users = await response.json();
  return (Array.isArray(users) ? users : [users]) as UserType[];
}

function App() {
  const [id, setId] = useState("");

  const idToGet = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const usersPromise = fetchData(idToGet);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <>
      <Home />
    </>
  );
}

export default App;