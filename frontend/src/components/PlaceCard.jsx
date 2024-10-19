import React from 'react';

const PlaceCard = ({ place, onMarkVisited }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={place.image} alt={place.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{place.name}</div>
        <p className="text-gray-700 text-base">{place.description}</p>
        <button
          className={`mt-4 px-4 py-2 rounded ${place.visited ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
          onClick={() => onMarkVisited(place.id)}
        >
          {place.visited ? "Unmark as Visited" : "Mark as Visited"}
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
