import React, { useState } from "react";
import axios from "axios";

function ContactForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const isValid =
    form.name &&
    form.email.includes("@") &&
    form.phone.length >= 10;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    setSuccess("Contact added successfully");
    refresh();
    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Add Contact</h3>

      {success && (
        <p className="text-green-600 mb-3">{success}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full border p-2 rounded"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Phone"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Message (optional)"
          rows="3"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />

        <button
          disabled={!isValid}
          className={`w-full py-2 rounded text-white ${
            isValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
