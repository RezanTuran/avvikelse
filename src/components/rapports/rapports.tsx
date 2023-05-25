import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Rapports = () => {
  const [rapports, setRapports] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_GET || ''}?action=getTruckRepairs`)
      .then((response: any) => {
        setRapports(response.data);

        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {rapports.map((rapport: any) => (
        <div
          style={{ border: '4px solid black', margin: '5px', padding: '15px' }}
        >
          <img
            src={require(`../../assets/img/${rapport.image}`).default}
            alt="React Logo"
            style={{ height: 250, width: 200 }}
          />
          <p>{rapport.regNr}</p>
          <p>{rapport.repairArea}</p>
          <p>{rapport.explainRepair}</p>
          <p>{rapport.datum}</p>
        </div>
      ))}
    </div>
  );
};

export default Rapports;
