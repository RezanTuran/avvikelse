import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Rapports = () => {
  const [rapports, setRapports] = useState([]);

  useEffect(() => {
    Axios.get(
      'http://localhost:8888/recievers/truckRecievers.php?action=getTruckRepairs'
    )
      .then((response: any) => {
        setRapports(response.data);

        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {rapports.map((rapport: any) => (
        <div>
          <p>{rapport.regNr}</p>
          <img
            src={require(`../../assets/img/${rapport.image}`).default}
            alt="React Logo"
            style={{ height: 250, width: 200 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Rapports;
