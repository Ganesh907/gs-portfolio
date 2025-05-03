import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-40">
      <div className="relative w-[100px] h-[100px]">
        <div className="absolute inset-0 border-4 border-black border-t-4 border-t-gray-300 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
