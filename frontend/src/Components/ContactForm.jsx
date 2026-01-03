import { useState } from "react";
import axios from "axios";

const API = "https://contact-management-app-backend-5rvl.onrender.com/api/contacts";

function ContactForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const isValid =
    form.name.trim() &&
    form.email.includes("@") &&
    form.phone.length >= 10;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API, form);
      setStatus("Contact saved successfully");
      setForm({ name: "", email: "", phone: "", message: "" });
      refresh();
      setTimeout(() => setStatus(""), 3000);
    } catch {
      setStatus("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Contact Details
      </h2>

      {status && (
        <p className="text-sm text-green-600 mb-3">{status}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          rows="3"
          placeholder="Message (optional)"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button
          disabled={!isValid}
          className={`w-full py-2 rounded-md text-white text-sm ${
            isValid
              ? "bg-blue-600 active:bg-blue-700"
              : "bg-gray-400"
          }`}
        >
          Save Contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
