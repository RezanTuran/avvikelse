import React, { useState } from 'react';
import Loginform from './loginForm';
import Rapports from '../rapports';

const Login = () => {
  const adminUser = {
    email: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
  };

  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Login = (details: any) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        email: details.email,
      });
    } else {
      setError('Fel användarnamn eller lösenord');
    }
  };

  const Logout = () => {
    setUser({ email: '' });
  };

  return (
    <div>
      {user.email !== '' ? (
        <div>
          <h2>{user.email}</h2>
          <Rapports />
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Loginform Login={Login} error={error} />
      )}
    </div>
  );
};
export default Login;
