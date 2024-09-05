import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/RocketsSlice';
import missionsReducer from './missions/missionSlice';
import dragonsReducer from './Dragons/DragonsSlice'; // Import your new slice

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    dragons: dragonsReducer, // Add your new slice here
  },
});

export default store;
