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
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setPreloader(true);
    setPage(page + 1);
    const result = await api.getUsers(page + 1);
    setShowMore(result.links.next_url ? true : false);
    const arr = [...users, ...result.users];
    setUsers([...arr]);
    setPreloader(false);
  }

  async function addNewUser() {
    const result = await api.getUsers();

    return setUsers([...result.users]);
  }

  const setPreloader = (value) => {
    return setLoading(value);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <UsersList
        users={users}
        getUsers={getUsers}
        showMore={showMore}
        loading={loading}
      />
      <SignUp
        addNewUser={addNewUser}
        loading={loading}
        setPreloader={setPreloader}
      />
    </div>
  );
}

export default App;
