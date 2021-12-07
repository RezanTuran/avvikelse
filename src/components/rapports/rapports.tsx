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
        <div key={rapport.id}>
          <h4>{rapport.firstName}</h4>
          <h4>{rapport.sureName}</h4>
          <h4>{rapport.phoneNumber}</h4>
          <h4>{rapport.driverNumber}</h4>
          <h4>{rapport.loadNumber}</h4>
        </div>
      ))}
    </div>
  );
};

export default Rapports;
