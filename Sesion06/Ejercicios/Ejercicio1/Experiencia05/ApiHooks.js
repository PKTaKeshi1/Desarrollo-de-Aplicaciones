import React, { useState, useEffect } from "react";

function ApiHooks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=React&format=json&origin=*")
      .then((res) => res.json())
      .then((result) => {
        setData(result[1].slice(0, 5));
      });
  }, []);

  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
export default ApiHooks;
