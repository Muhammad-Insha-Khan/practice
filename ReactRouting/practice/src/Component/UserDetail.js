// src/UserDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  // Sample user data
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];

  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;
