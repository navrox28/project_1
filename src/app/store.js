import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../slices/adminslice";
import medicineReducer from "../slices/medicinesSlices";
import appointmentReducer from "../slices/appointmentsSlices";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    medicines: medicineReducer,
    appointments: appointmentReducer,
  },
});
