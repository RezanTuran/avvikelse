import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Rapports = () => {
  const [rapports, setRapports] = useState([]);

  useEffect(() => {
    Axios.get(process.env.REACT_APP_GET || '')
      .then((Response: any) => {
        setRapports(Response.data);
        console.log(Response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {rapports.map((rapport: any) => (
        <li key={rapport.id}>{rapport.firstName}</li>
      ))}
    </div>
  );
};

export default Rapports;
