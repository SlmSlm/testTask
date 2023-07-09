import React, { useEffect, useState } from "react";
import { api } from "./API/api";
import "./App.scss";

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SignUp from "./Components/SignUp/SignUp";
import UsersList from "./Components/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [showMore, setShowMore] = useState();

  async function getUsers() {
    setPage(page + 1);
    const result = await api.getUsers(page + 1);
    setShowMore(result.links.next_url ? true : false);
    const arr = [...users, ...result.users];
    return setUsers([...arr]);
  }

  async function addNewUser() {
    const result = await api.getUsers();

    // return setUsers([result.users[0], ...users]);
    return setUsers([...result.users]);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <UsersList users={users} getUsers={getUsers} showMore={showMore} />
      <SignUp addNewUser={addNewUser} />
    </div>
  );
}

export default App;
