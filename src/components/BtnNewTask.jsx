import React from 'react';
import Add from '../assets/Add.svg';
import { useNavigate } from 'react-router-dom';

const BtnNewTask = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aside'); // Navega a la ruta donde está definido tu Aside
  };
  

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-between p-4 w-full h-24 bg-orange-200 rounded-lg shadow transition duration-300 hover:bg-orange-300"
    >
      <div className="bg-orange-200 w-10 h-10 flex items-center justify-center rounded-lg">
        <img src={Add} alt="Add icon" className="object-contain w-full h-full" />
      </div>
      <span className="text-lg flex-1">Add new task</span>
    </button>
  );
};

export default BtnNewTask;
