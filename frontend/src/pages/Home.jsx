import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markVisited } from '../redux/actions';
import PlaceCard from '../components/PlaceCard';

const Home = () => {
  const places = useSelector(state => state.places);
  const dispatch = useDispatch();

  const handleMarkVisited = (id) => {
    dispatch(markVisited(id));
  };

  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {places.map(place => (
          <PlaceCard key={place.id} place={place} onMarkVisited={handleMarkVisited} />
        ))}
      </div>
    </main>
  );
};

export default Home;
