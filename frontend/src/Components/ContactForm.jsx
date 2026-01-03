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
      setStatus("Contact added successfully 🎉");
      setForm({ name: "", email: "", phone: "", message: "" });
      refresh();
      setTimeout(() => setStatus(""), 3000);
    } catch {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <div className="relative max-w-lg mx-auto">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20"></div>

      <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Add New Contact
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Save and manage your contacts easily
        </p>

        {status && (
          <p className="text-sm mb-4 text-green-600">
            {status}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <textarea
            rows="3"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Message (optional)"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button
            disabled={!isValid}
            className={`w-full py-3 rounded-xl font-medium text-white transition-all duration-200 ${
              isValid
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] active:scale-95"
                : "bg-slate-400 cursor-not-allowed"
            }`}
          >
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
