// src/slices/appointmentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
    },
    removeAppointment: (state, action) => {
      return state.filter(app => app.id !== action.payload);
    }
  }
});

export const { addAppointment, removeAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
