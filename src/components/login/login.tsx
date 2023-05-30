import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Login = () => {
  const [user, setUser] = useState(String);
  const [password, setPassword] = useState(String);
  const [error, setError] = useState(String);
  const [msg, setMsg] = useState(String);

  useEffect(() => {
    Axios.get(
      'http://localhost:8888/recievers/loginRecievers.php/?action=loginUser'
    )
      .then((response: any) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e: any, type: any) => {
    switch (type) {
      case 'user':
        setError('');
        setUser(e.target.value);
        if (e.target.value === '') {
          setError('Username is blank');
        }
        break;
      case 'password':
        setError('');
        setPassword(e.target.value);
        if (e.target.value === '') {
          setError('Password is blank');
        }
        break;
      default:
    }
  };

  // const loginSubmit = () => {
  //   if (user !== '' && password !== '') {
  //   } else {
  //     setError('All field is required');
  //   }
  // };

  return (
    <div>
      <h1>Login</h1>
      <br />
      {error !== '' ? <span>{error}</span> : <span>{msg}</span>}
      <br />
      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e: any) => handleInputChange(e, 'user')}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: any) => handleInputChange(e, 'password')}
      />
      <br />
      <input type="submit" value="Login" />
    </div>
  );
};

export default Login;
