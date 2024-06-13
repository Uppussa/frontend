import React from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../assets/close.svg';

const WontDo = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/wont-do')}
      className="flex items-center justify-between p-4 w-full h-24 bg-red-200 rounded-lg shadow transition duration-300 hover:bg-red-300"
    >
      <span className="text-2xl mr-4 w-10 h-10 bg-white rounded-lg">☕</span>
      <span className="text-lg flex-1">Task Won’t Do</span>
      <div className="bg-red-200 w-10 h-10 flex items-center justify-center rounded-lg ">
        <img src={close} className="object-contain w-full h-full" />
      </div>
    </button>
  );
};

export default WontDo;
