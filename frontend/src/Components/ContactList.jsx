import axios from "axios";

const API = "https://contact-management-app-backend-5rvl.onrender.com/api/contacts";

function ContactList({ contacts, refresh }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact?")) return;
    await axios.delete(`${API}/${id}`);
    refresh();
  };

  return (
    <div className="max-w-lg mx-auto mt-8 space-y-4">
      {contacts.map((c) => (
        <div
          key={c._id}
          className="bg-white rounded-2xl shadow-lg p-4 flex justify-between items-center hover:shadow-xl transition"
        >
          <div>
            <p className="font-semibold text-slate-800">
              {c.name}
            </p>
            <p className="text-sm text-slate-500">
              {c.phone}
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleDelete(c._id)}
            className="px-4 py-2 text-xs font-medium text-white bg-red-500 rounded-xl hover:bg-red-600 active:scale-95 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
