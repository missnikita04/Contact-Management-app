import React, { useState } from "react";
import axios from "axios";

function ContactList({ contacts }) {
  const [sorted, setSorted] = useState(false);

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    window.location.reload();
  };

  const displayContacts = sorted
    ? [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    : contacts;

  return (
    <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Contact List</h3>
        <button
          onClick={() => setSorted(!sorted)}
          className="text-sm bg-gray-200 px-3 py-1 rounded"
        >
          Sort by Name
        </button>
      </div>

      <table className="w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Message</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {displayContacts.map(c => (
            <tr key={c._id} className="text-center">
              <td className="p-2 border">{c.name}</td>
              <td className="p-2 border">{c.email}</td>
              <td className="p-2 border">{c.phone}</td>
              <td className="p-2 border">{c.message}</td>
              <td className="p-2 border">
                <button
                  onClick={() => deleteContact(c._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
