import React, { useState } from 'react';
import Loginform from './loginForm';
import Rapports from '../rapports';

const SignIn = () => {
  const adminUser = {
    email: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = (details: any) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log('logged in');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError('Uppgifter stämmer inte');
    }
  };

  const Logout = () => {
    setUser({ name: '', email: '' });
  };

  return (
    <div>
      {user.email !== '' ? (
        <div>
          <h2>{user.name}</h2>
          <Rapports />
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Loginform Login={Login} error={error} />
      )}
    </div>
  );
};
export default SignIn;
