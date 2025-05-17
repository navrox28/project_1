import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment, removeAppointment } from '../slices/appointmentsSlices';

export default function Appointments() {
  const appointments = useSelector(state => state.appointments);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ patient: '', date: '' });

  const handleAdd = () => {
    if (form.patient && form.date) {
      dispatch(addAppointment({ id: Date.now(), ...form }));
      setForm({ patient: '', date: '' });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <input
        type="text"
        placeholder="Patient Name"
        className="border p-2 w-full mb-2"
        value={form.patient}
        onChange={e => setForm({ ...form, patient: e.target.value })}
      />
      <input
        type="date"
        className="border p-2 w-full mb-2"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })}
      />
      <button className="bg-purple-600 text-white px-4 py-2 rounded mb-4" onClick={handleAdd}>
        Book Appointment
      </button>
      <ul className="space-y-2">
        {appointments.map(app => (
          <li key={app.id} className="flex justify-between items-center bg-white p-2 shadow">
            <span>{app.patient} - {app.date}</span>
            <button className="text-red-500" onClick={() => dispatch(removeAppointment(app.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}