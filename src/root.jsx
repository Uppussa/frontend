import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from './components/All';
import BtnNewTask from './components/BtnNewTask';
import Aside from './components/Aside';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/new-task" element={<BtnNewTask />} />
      <Route path="/aside" element={<Aside />} />
    </Routes>
  );
};

export default Root;
