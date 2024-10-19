import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
const PlaceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };
  const place = useSelector(state => state.places.find(p => p.id === parseInt(id)));

  return (
    <div className="p-4">
      {place ? (
        <>
          <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <button
              className="relative top-0 left-100 text-align-left mb-4 px-4 py-2 bg-black hover:bg-gray-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 align-left"
              onClick={handleGoBack}
            >
              <FontAwesomeIcon icon={faBackward} className='mr-2' />
              Go Back
            </button>
            <div className="flex space-x-4">
              <img className="w-1/3 h-64 object-cover rounded-lg" 
              src={place.image} 
              alt={place.name} />
              <div className="flex-grow">
                <h2 className="text-align-left text-2xl font-bold text-gray-800 mb-4">{place.name}</h2>
                <p className="text-gray-700">{place.description}</p>
              </div>
            </div>

          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">OOPS!</h1>
            <p className="text-gray-700">The Place you're looking for can't be found or doesn't exist...</p>
            <div className="flex space-x-4 mt-4 justify-center">
              <button
                className="px-4 py-2 bg-black hover:bg-gray-500 text-white rounded-lg transition duration-300"
                onClick={handleGoBack}
              >
                <FontAwesomeIcon icon={faBackward} className='mr-2' />
                Go Back
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-600"
                // onClick={suggestRandomPlace}
              >
                Explore Places
                <FontAwesomeIcon icon={faMapLocationDot} className='ml-2' />
              </button>

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default PlaceDetail;
