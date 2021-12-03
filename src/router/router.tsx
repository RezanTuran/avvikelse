import React from 'react';
import { Route, Routes } from 'react-router-dom';
import KungalvForm from '../components/kungalvForm';
import HelsingborgForm from '../components/helsingborgForm';
import Login from '../components/login';
import Rapports from '../components/rapports';

const App = () => {
  return (
    <Routes>
      <Route path="/kungalvform" element={<KungalvForm />} />
      <Route path="/helsingborgform" element={<HelsingborgForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rapports" element={<Rapports />} />
    </Routes>
  );
};
export default App;
