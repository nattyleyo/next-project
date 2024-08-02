import React from "react";

interface UserType {
  id: string;
  name: string;
}
const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userdata: UserType[] = await res.json();
  return (
    <ul>
      {userdata.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserPage;
