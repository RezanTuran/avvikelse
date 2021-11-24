import React from 'react';
import { Route, Routes } from 'react-router-dom';
import KungalvForm from '../components/kungalvForm';
import HelsingborgForm from '../components/helsingborgForm';

export default function App() {
  return (
    <Routes>
      <Route path="/kungalvform" element={<KungalvForm />} />
      <Route path="/helsingborgform" element={<HelsingborgForm />} />
    </Routes>
  );
}
