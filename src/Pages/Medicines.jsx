import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMedicine, removeMedicine } from '../slices/medicinesSlices';

export default function Medicines() {
  const medicines = useSelector(state => state.medicines);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', quantity: '' });

  const handleAdd = () => {
    if (form.name && form.quantity) {
      dispatch(addMedicine({ id: Date.now(), ...form }));
      setForm({ name: '', quantity: '' });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Medicine Inventory</h2>
      <input
        type="text"
        placeholder="Medicine Name"
        className="border p-2 w-full mb-2"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        className="border p-2 w-full mb-2"
        value={form.quantity}
        onChange={e => setForm({ ...form, quantity: e.target.value })}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded mb-4" onClick={handleAdd}>
        Add Medicine
      </button>
      <ul className="space-y-2">
        {medicines.map(med => (
          <li key={med.id} className="flex justify-between items-center bg-white p-2 shadow">
            <span>{med.name} ({med.quantity})</span>
            <button className="text-red-500" onClick={() => dispatch(removeMedicine(med.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}