import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markVisited,fetchPlaces } from '../redux/slices/placesSilces.jsx';
import PlaceCard from '../components/PlaceCard';

const Home = () => {
  const dispatch = useDispatch();
  const { places, loading, error, lastFetched } = useSelector((state) => state.places);

  useEffect(() => {
    if (!lastFetched) { // Fetch data only if it hasn't been fetched yet
      dispatch(fetchPlaces());
    }
  }, [dispatch, lastFetched]);
  const [randomPlace, setRandomPlace] = useState(null);

  const handleMarkVisited = (id) => {
    dispatch(markVisited(id));
  };

  const suggestRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    setRandomPlace(places[randomIndex]);
  };


  useEffect(() => {
    console.log('Places Changed', places);
    console.log('Error', error);
    console.log('Loading', loading);
  }, [places,error,loading]);
  return (
    <main className="p-4">
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
      {randomPlace && (
        <div className="mt-8 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-bold">Random Place Suggestion</h3>
          <PlaceCard key={randomPlace.id} place={randomPlace} onMarkVisited={handleMarkVisited} />
        </div>
      )}
    </main>
  );
};

export default Home;
