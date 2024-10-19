import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PlaceDetail = () => {
  const { id } = useParams();
  const place = useSelector(state => state.places.find(p => p.id === parseInt(id)));

  return (
    <div className="p-4">
      {place ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{place.name}</h2>
          <img className="w-full mb-4" src={place.image} alt={place.name} />
          <p className="text-gray-700">{place.description}</p>
        </>
      ) : (
        <p>Place not found.</p>
      )}
    </div>
  );
};

export default PlaceDetail;
