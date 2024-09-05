import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../modules/Dragon.css';
import DragonsItem from './DragonsItem';
import { fetchDragons, reserveDragon } from '../redux/Dragons/DragonsSlice'; // Ensure this import is correct

function Dragons() {
  const dispatch = useDispatch();
  const { loading, error, dragonData } = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragons()); // Fetch dragons from server
  }, [dispatch]);

  // Define handleReserve function
  const handleReserve = (id) => {
    dispatch(reserveDragon(id)); // Dispatch action to reserve or cancel dragon
  };

  return (
    <ul className="dragon-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        dragonData.map((dragon) => (
          <DragonsItem
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            image={dragon.flickr_images[0]} // Ensure correct data field
            description={dragon.description}
            reserved={dragon.reserved} // Ensure this field is available
            onReserve={handleReserve} // Pass handleReserve function
          />
        ))
      )}
    </ul>
  );
}

export default Dragons;
