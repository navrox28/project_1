import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../slices/adminslice";

export default function AdminPortal() {
  const users = useSelector((state) => state.admin.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addUser({ id: Date.now(), name }));
      setName("");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Portal</h2>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        onClick={handleAdd}
      >
        Add User
      </button>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-white p-2 shadow"
          >
            <span>{user.name}</span>
            <button
              className="text-red-500"
              onClick={() => dispatch(removeUser(user.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
