import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markVisited, fetchPlaces } from '../redux/slices/placesSilces.jsx';
import PlaceCard from '../components/PlaceCard';
import SugessionCard from '../components/SugessionCard';

const Home = ({suggestions}) => {
  const dispatch = useDispatch();
  const { places, loading, error, lastFetched } = useSelector((state) => state.places);

  useEffect(() => {
    if (!lastFetched) { // Fetch data only if it hasn't been fetched yet
      dispatch(fetchPlaces());
    }
  }, [dispatch, lastFetched]);

  const handleMarkVisited = (id) => {
    dispatch(markVisited(id));
  };





  return (
    <main className="p-4">
      {
        suggestions && suggestions.length > 0 && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Suggested Place</h2>
          </div>
        )
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestions && suggestions.map(place => (
          <SugessionCard key={place.id} place={place}  />
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Beautiful Places</h2>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {places && places.map(place => (
          <PlaceCard key={place.id} place={place} onMarkVisited={handleMarkVisited} />
        ))}
      </div>
    </main>
  );
};

export default Home;
