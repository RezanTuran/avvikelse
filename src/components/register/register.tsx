import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import Axios from 'axios';

const Register = () => {
  const [name, setName] = useState(String);
  const [password, setPassword] = useState(String);

  const registerUser = (e: any) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append('action', 'addNewUser');
    formData.append('name', name);
    formData.append('password', password);

    const url = 'http://localhost:8888/recievers/registerRecievers.php/';
    Axios.post(url, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Box onSubmit={registerUser} component="form">
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Register</button>
      </Box>
    </div>
  );
};

export default Register;
