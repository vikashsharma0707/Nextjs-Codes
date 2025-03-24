"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Userlist = () => {
  const [data, setData] = useState([]);

  const loaddata = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    loaddata();
  }, []); // Added dependency array to prevent infinite re-renders

  return (
    <>
      <h1>Client Side API</h1>
      <table border="1" cellPadding="10">
        <tbody>
          {data.map((key) => (
            <tr key={key.id}>
              <td>{key.id}</td>
              <td>{key.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Userlist;
