import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const { setCars } = carSlice.actions;

export const selectCarsState = (state) => state.carGlobalState.cars;

export default carSlice.reducer;
