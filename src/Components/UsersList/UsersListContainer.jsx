import React, { useEffect, useState } from "react";
import { usersApi } from "../../API/api";
import UsersList from "./UsersList";

const UsersListContainer = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [showMore, setShowMore] = useState();

  async function getUsers() {
    setPage(page + 1);
    const result = await usersApi.getUsers(page + 1);
    console.log(result);
    setShowMore(result.links.next_url ? true : false);
    const arr = [...users, ...result.users];
    return setUsers([...arr]);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return <UsersList users={users} getUsers={getUsers} showMore={showMore} />;
};

export default UsersListContainer;
