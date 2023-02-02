import React, { useState } from 'react';
import Axios from 'axios';
import Vehicle from './vehicle';

const TruckRepair = () => {
  const [truckReapairArea, setTruckReapairArea] = useState(String);
  const [explainRepair, setExplain] = useState(String);
  const [truckImg, setTruckImg] = useState(new Blob());
  const [regNr, setRegNr] = useState(String);

  const sendRapport = (e: any) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append('action', 'add');
    formData.append('regNr', regNr);
    formData.append('repairArea', truckReapairArea);
    formData.append('explainRepair', explainRepair);
    formData.append('image', truckImg);
    formData.append(
      'datum',
      new Date().toLocaleDateString() + '  ' + new Date().toLocaleTimeString()
    );

    const url = process.env.REACT_APP_POST_TRUCK || '';
    Axios.post(url, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const removeSelectedImage = () => {
    setTruckImg(new Blob());
  };

  return (
    <div>
      <form
        onSubmit={sendRapport}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: '20px',
          border: '2px solid black',
          padding: '10px',
        }}
      >
        <h1>Truck</h1>
        <select
          onChange={(e) => {
            setRegNr(e.target.value);
          }}
        >
          <option value={''}>Välj Fordon</option>
          {Vehicle.map((data, index) => (
            <option value={data.registrationNumber} key={index}>
              {data.registrationNumber}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="truckReapairArea"
          placeholder="Skada område"
          onChange={(e) => {
            setTruckReapairArea(e.target.value);
          }}
        />
        <input
          type="text"
          name="explainexplainRepair"
          placeholder="Berätta vad som har hänt"
          onChange={(e) => {
            setExplain(e.target.value);
          }}
        />

        <input
          type="file"
          name="truckImg"
          onChange={(e: any) => {
            setTruckImg(e.target.files[0]);
          }}
        />
        <img src={URL.createObjectURL(truckImg)} alt="" />
        <button onClick={removeSelectedImage}>Ta bort bilden</button>

        <input type="submit" value="Skicka" />
      </form>
    </div>
  );
};

export default TruckRepair;
