import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchDataWithAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API using Axios
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        // Set data and loading states
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        // Handle errors
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div>
      <h1>Todo List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchDataWithAxios;
