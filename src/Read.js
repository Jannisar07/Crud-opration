import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Read() {
  const [data, setData] = useState([]);

  function getdata() {
    axios.get("https://666ac4147013419182d0d85b.mockapi.io/crudapp").then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <table>
      <tr>
        <th>id</th>
        <th>Username</th>
        <th>UserAge</th>
        <th>Useremail</th>
      </tr>
      {data.map((info) => (
        <tr>
          <td>{info.id}</td>
          <td>{info.Username}</td>
          <td>{info.UserAge}</td>
          <td>{info.UserEmail}</td>
        </tr>
      ))}
    </table>
  );
}

export default Read;