import React from 'react';
const SugessionCard = ({ place }) => {

  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full max-h-40 h-40" src={place.image} alt={place.name} width={150} height={150}/>
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 ">{place.name}</div>
        <p className="text-gray-700  text-center overflow-hidden text-ellipsis h-12">{place.description}</p>
        
      </div>
    </div>
  );
};

export default SugessionCard;
