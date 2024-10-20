import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faXmark } from '@fortawesome/free-solid-svg-icons';
const PlaceCard = ({ place, onMarkVisited }) => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/place/${place.id}`);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={place.image} alt={place.name} />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 ">{place.name}</div>
        <p className="text-gray-700  text-center overflow-hidden text-ellipsis h-12">{place.description}</p>
        <div className="">
          <button
            className={`mt-4 mr-1 px-4 py-2 rounded focus:outline-none focus:border-transparent ${place.visited ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
            onClick={() => onMarkVisited(place.id)}
          >
            {place.visited ? "Unmark Visited" : "Mark as Visited"}
            <FontAwesomeIcon icon={place.visited ? faXmark : faCheckDouble} className='ml-2' />
          </button>
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={handleNavigate}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
