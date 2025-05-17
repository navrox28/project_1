import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const medicineSlice = createSlice({
  name: "medicines",
  initialState,
  reducers: {
    addMedicine: (state, action) => {
      state.list.push(action.payload);
    },
    removeMedicine: (state, action) => {
      state.list = state.list.filter(
        (medicine, index) => index !== action.payload
      );
    },
  },
});

export const { addMedicine, removeMedicine } = medicineSlice.actions;
export default medicineSlice.reducer;
