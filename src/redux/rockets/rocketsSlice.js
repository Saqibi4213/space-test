import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    setRockets: (state, action) => action.payload,
    reserveRocket: (state, action) => {
      return state.map(rocket => 
        rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
      );
    },
    cancelReservation: (state, action) => {
      return state.map(rocket => 
        rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
      );
    },
  },
});

export const { setRockets, reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
