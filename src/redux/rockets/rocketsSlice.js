import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    setRockets: (state, action) => action.payload,
    reserveRocket: (state, action) => 
        state.map((rocket) => 
          (rocket.id === action.payload ? { ...rocket, reserved: true } : rocket)
        ),
    },
    cancelReservation: (state, action) => {
        if (rocket.id === action.payload) {
            return { ...rocket, reserved: false };
          }
          return rocket;
    },
  },
);

export const { setRockets, reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
